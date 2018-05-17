import React from "react";
import Article from "./Article";
import "./ArticlesByTopic.css";
import axios from "axios";
import constants from "../constants";
import * as api from "../api";

class ArticlesByTopic extends React.Component {
  state = {
    articles: constants.articles,
    votesCast: {}
  };

  componentDidMount() {
    axios
      .get("https://henrys-news.herokuapp.com/api/articles")
      .then(({ data }) => {
        const articles = data.articles;
        this.setState({
          articles
        });
      });
  }

  render() {
    const { articles } = this.state;
    const { className, match } = this.props;
    const topic = match.params.topic || "all";
    let articlesByTopic;
    topic === "all"
      ? (articlesByTopic = articles)
      : (articlesByTopic = articles.filter(
          article => article.belongs_to.slug === topic
        ));
    return (
      <div className={className}>
        <div className="container articles-container">
          {articlesByTopic.map(article => {
            return (
              <Article
                key={article._id}
                article={article}
                changeVotes={this.changeVotes}
                handleVoteUpClick={this.handleVoteUpClick}
                handleVoteDownClick={this.handleVoteDownClick}
              />
            );
          })}
        </div>
      </div>
    );
  }

  changeVotes = (vote, article_id, cb) => {
    const { votesCast } = this.state;
    const newVotesCast = { ...votesCast };
    if (!newVotesCast[article_id]) {
      vote === "up"
        ? (newVotesCast[article_id] = 1)
        : (newVotesCast[article_id] = -1);
    } else {
      if (vote === "up") {
        newVotesCast[article_id] !== 1 ? newVotesCast[article_id]++ : null;
      } else if (vote === "down") {
        newVotesCast[article_id] !== -1 ? newVotesCast[article_id]-- : null;
      }
    }

    const newArticles = [...this.state.articles];
    newArticles.forEach(article => {
      if (article._id === article_id) {
        vote === "up" && votesCast[article_id] !== 1
          ? article.votes++
          : vote === "down" && votesCast[article_id] !== -1
            ? article.votes--
            : null;
      }
    });
    this.setState(
      {
        articles: newArticles,
        votesCast: newVotesCast
      },
      cb
    );
  };

  handleVoteUpClick = article_id => {
    const { votesCast } = this.state;
    this.changeVotes("up", article_id, () => {
      if (votesCast[article_id] !== 1) {
        api.updateArticleVoteCount(article_id, "up").catch(console.log);
      }
    });
  };

  handleVoteDownClick = article_id => {
    const { votesCast } = this.state;
    this.changeVotes("down", article_id, () => {
      if (votesCast[article_id] !== -1) {
        api.updateArticleVoteCount(article_id, "down").catch(console.log);
      }
    });
  };
}

export default ArticlesByTopic;
