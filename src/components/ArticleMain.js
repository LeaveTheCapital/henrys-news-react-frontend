import React from "react";
import "./ArticleMain.css";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import Button from './Button';
import CommentInput from "./CommentInput";
import Vote from "./Vote";
import * as api from "../api";

class ArticleMain extends React.Component {
  state = {
    article: {
      votes: 0,
      _id: "",
      title: "",
      body: "",
      belongs_to: { _id: "", slug: "" },
      created_by: { name: "" }
    },
    comments: [],
    users: [],
    votesCast: {},
    myCommentId: "",
    sort: ""
  };

  componentDidMount() {
    const article_id = this.props.match.params.article_id;
    Promise.all([
      api.getArticleById(article_id),
      api.getCommentsByArticleId(article_id)
    ])
      .then(([articleData, commentsData]) => {
        const article = articleData.data.article;
        const comments = commentsData.data.comments;
        this.setState({ article, comments });
      })
      .catch(console.log);
  }

  componentDidUpdate(prevProps, prevState) {
    const article_id = this.props.match.params.article_id;
    const { myCommentId } = this.state;
    if (
      this.state.votesCast[myCommentId] !== prevState.votesCast[myCommentId] ||
      this.props.votesCount !== prevProps.votesCount
    ) {
      Promise.all([
        api.getArticleById(article_id),
        api.getCommentsByArticleId(article_id)
      ])
        .then(([articleData, commentsData]) => {
          const article = articleData.data.article;
          const comments = commentsData.data.comments;
          this.setState({ article, comments });
        })
        .catch(console.log);
    }
  }

  render() {
    const { comments, article } = this.state;
    const commentCount = comments.length;
    const {
      className,
      articles,
      handleVoteUpClick,
      handleVoteDownClick,
      currentUser
    } = this.props;
    return (
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <Vote
              collection={articles}
              handleVoteUpClick={handleVoteUpClick}
              handleVoteDownClick={handleVoteDownClick}
              _id={article._id}
              votes={article.votes}
            />
            <div className="col-sm-11 article-main">
              <h2>
                <span className="article-title">{article.title}</span>
              </h2>
            </div>
          </div>
        </div>
        <p>{article.body}</p>
        <p>
          <span>{article.created_by.name} | </span>
          <span> Votes: {article.votes}</span>
          <span> Comments: {comments.length}
          </span>
          <Link to={`/topics/${article.belongs_to.slug}`}>
            {" "}
            /topics/{article.belongs_to.slug}
          </Link>
        </p>
        <CommentInput
          commentCount={commentCount}
          className="comment-input"
          onClick={this.handleCommentClick}
          article_id={article._id}
        />
        <section className="container-fluid" id="comments">
          <div className="row" id="comments-top">
            <span>
            Comments
            Sort by: <Button text="Newest" onClick={this.sortCommentsByNewest} />
          <Button text="Most Popular" onClick={this.sortCommentsByMostPopular} />
          </span>
          </div>
          {comments.map(comment => {
            return (
              <Comment
                currentUserId={currentUser._id}
                comment={comment}
                key={comment._id}
                handleDeleteClick={this.handleDeleteClick}
                handleCommentVoteDownClick={this.handleCommentVoteDownClick}
                handleCommentVoteUpClick={this.handleCommentVoteUpClick}
              />
            );
          })}
        </section>
      </div>
    );
  }

  changeCommentVotes = (vote, comment_id, newVotesCast) => {
    api
      .updateCommentVoteCount(comment_id, vote)
      .then(({ data }) => {
        this.setState({
          votesCast: newVotesCast,
          myCommentId: comment_id
        });
      })
      .catch(console.log);
  };

  handleCommentVoteUpClick = comment_id => {
    const { votesCast } = this.state;
    const newVotesCast = { ...votesCast };
    if (!newVotesCast[comment_id]) {
      newVotesCast[comment_id] = 1;
      this.changeCommentVotes("up", comment_id, newVotesCast);
    } else if (newVotesCast[comment_id] !== 1) {
      newVotesCast[comment_id]++;
      this.changeCommentVotes("up", comment_id, newVotesCast);
    }
  };

  handleCommentVoteDownClick = comment_id => {
    const { votesCast } = this.state;
    const newVotesCast = { ...votesCast };
    if (!newVotesCast[comment_id]) {
      newVotesCast[comment_id] = -1;
      this.changeCommentVotes("down", comment_id, newVotesCast);
    } else if (newVotesCast[comment_id] !== -1) {
      newVotesCast[comment_id]--;
      this.changeCommentVotes("down", comment_id, newVotesCast);
    }
  };

  sortCommentsByNewest = () => {
    const newComments = this.state.comments.slice();
    newComments.sort((a,b)=> b.created_at - a.created_at);
    this.setState({
      comments: newComments
    })
  }

  sortCommentsByMostPopular = () => {
    const newComments = this.state.comments.slice();
    newComments.sort((a,b)=> b.votes - a.votes);
    this.setState({
      comments: newComments
    })
  }

  handleDeleteClick = id => {
    const { comments } = this.state;
    const prevComments = [...comments];
    const newComments = [...comments];
    const comment = newComments.find(comment => comment._id === id);
    const index = newComments.indexOf(comment);
    newComments.splice(index, 1);
    this.setState(
      {
        comments: newComments
      },
      () => {
        api
          .deleteComment(id)
          .then(console.log)
          .catch(err => {
            console.log(err);
            this.setState({
              comments: prevComments
            });
          });
      }
    );
  };

  updateComments = (body, cb) => {
    const { currentUser } = this.props;
    const { article } = this.state;
    const newComments = [...this.state.comments];
    const newComment = {
      body,
      votes: 0,
      belongs_to: article._id,
      created_by: currentUser,
      created_at: new Date().getTime()
    };
    newComments.push(newComment);
    this.setState(
      {
        comments: newComments
      },
      cb
    );
  };

  handleCommentClick = (article_id, body) => {
    const { currentUser } = this.props;
    const created_by = currentUser._id;
    const belongs_to = this.state.article._id;
    this.updateComments(body, () => {
      api
        .postComment(article_id, body, belongs_to, created_by)
        .then(({ data }) => {
          const newComments = [...this.state.comments];
          const newComment = newComments.find(comment => {
            return comment.body === data.comment;
          });
          const index = newComments.indexOf(newComment);
          newComments[index]._id = data._id;
          this.setState({
            comments: newComments
          });
        })
        .catch(console.log);
    });
  };
}

export default ArticleMain;
