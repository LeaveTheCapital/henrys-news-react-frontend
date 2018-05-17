import React from "react";
import "./ArticleMain.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
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
    comment: {
      body: ""
    }
  };

  componentDidMount() {
    const article_id = this.props.match.params.article_id;
    api.getArticleById(article_id).then(({ data }) => {
      const article = data.article;
      this.setState({
        article
      });
    });
    api.getCommentsByArticleId(article_id).then(({ data }) => {
      const comments = data.comments;
      console.log(comments);
      this.setState({
        comments
      });
    });
  }

  render() {
    const { comments, article } = this.state;
    const commentCount = comments.length;
    const { className } = this.props;
    return (
      <div className={className}>
        <div className="article-main">
          <h2>
            <span className="article-title">{article.title}</span>
          </h2>
        </div>
        <p>{article.body}</p>
        <p>
          <span>{article.created_by.name} | </span>
          <span> Votes: {article.votes}</span>
          <span> Comments: {comments.length}</span>
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
        <section id="comments">
          Comments
          {comments.map(comment => {
            return (
              <Comment
                comment={comment}
                className="comment"
                key={comment._id}
              />
            );
          })}
        </section>
      </div>
    );
  }

  updateComments = (body, cb) => {
    const {currentUser} = this.props;
    const {article} = this.state;
    const newComments = [...this.state.comments];
    const newComment = {
      body, belongs_to: article.belongs_to._id, created_by: {...currentUser}
    }
    console.log(newComment)
    newComments.push(newComment)
    this.setState(
      {
        comments: newComments
      },
      cb
    );
  };

  handleCommentClick = (article_id, body) => {
    const {currentUser} = this.props;
    const user = {avatar_url: currentUser.avatar_url, name: currentUser.name, username: currentUser.username, _id: currentUser._id};
    console.log(user)
    const belongs_to = this.state.article.belongs_to._id;
    this.updateComments(body, () => {
      api.postComment(article_id, body, belongs_to, user)
      .then(console.log)
      .catch(console.log)
    })
  };
}

export default ArticleMain;
