import React from "react";
import Article from "./Article";
import PostArticle from "./PostArticle";
import "./ArticlesByTopic.css";
import constants from "../constants";
import * as api from "../api";

class ArticlesByTopic extends React.Component {
  state = {
    articles: constants.articles
  };

  componentDidMount() {
    api.getAllArticles().then(({ data }) => {
      const articles = data.articles;
      this.setState({
        articles
      });
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.filter !== this.props.filter) {
      this.setState({
        ...this.state
      })
    }
  }

  render() {
    const { articles } = this.state;
    const articleCount = articles.length;
    const {
      className,
      match,
      changeVotes,
      filter,
      handleVoteDownClick,
      handleVoteUpClick
    } = this.props;
    const topic = match.params.topic || "all";
    if(filter==='top'){
      articles.sort((a,b)=>b.votes - a.votes)
    } else if(filter==='popular') {
      articles.sort((a,b)=>b.comment_count - a.comment_count)
    }
    let articlesByTopic;
    topic === "all"
      ? (articlesByTopic = articles)
      : (articlesByTopic = articles.filter(
          article => article.belongs_to.slug === topic
        ));
    return (
      <div className={className}>
        <div className="container-fluid articles-container">
          {topic !== "all" && (
            <PostArticle
              articleCount={articleCount}
              className="row"
              onClick={this.handlePostArticleClick}
              topic_slug={topic}
            />
          )}
          {articlesByTopic.map(article => {
            return (
              <Article
                key={article._id}
                article={article}
                articles={articles}
                changeVotes={changeVotes}
                handleVoteUpClick={handleVoteUpClick}
                handleVoteDownClick={handleVoteDownClick}
              />
            );
          })}
        </div>
      </div>
    );
  }

  handlePostArticleClick = (topic_slug, titleInput, input) => {
    const user_id = this.props.currentUserId;
    const topic_id = this.props.topics.find(topic => topic.slug === topic_slug)
      ._id;
    api
      .postArticle(topic_id, titleInput, input, user_id)
      .then(({ data }) => {
        // this.forceUpdate(() => {
        api.getAllArticles().then(({ data }) => {
          const articles = data.articles;
          this.setState({
            articles
          });
        });
        // });
      })
      .catch(console.log);
  };
}

export default ArticlesByTopic;
