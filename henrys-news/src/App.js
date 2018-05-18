import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav";
import UserBox from "./components/UserBox";
import Filter from "./components/Filter";
import Side from "./components/Side";
import constants from "./constants";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Users from "./components/Users";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticleMain from "./components/ArticleMain";
import * as api from "./api";

class App extends Component {
  state = {
    topics: constants.topics,
    users: constants.users,
    currentUser: constants.users[0],
    votesCast: {},
    articles: [],
    votesCount: 0
  };

  componentDidMount() {
    console.log(this.state.currentUser);
    axios
      .get("https://henrys-news.herokuapp.com/api/topics")
      .then(({ data }) => {
        const topics = data.topics;
        this.setState({
          topics
        });
      });
  }

  render() {
    const {
      topics,
      articles,
      users,
      currentUser,
      votesCast,
      votesCount
    } = this.state;
    return (
      <div className="app">
        <div className="container-fluid">
          <div id="top-bar-row" className="row">
            <Header />
            <Nav topics={topics} />
            <Filter />
            <UserBox currentUser={currentUser} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Switch>
              <Route
                path="/topics/:topic/:article_id"
                render={props => {
                  return (
                    <ArticleMain
                      {...props}
                      articles={articles}
                      votesCast={votesCast}
                      votesCount={votesCount}
                      changeVotes={this.changeVotes}
                      handleVoteDownClick={this.handleVoteDownClick}
                      handleVoteUpClick={this.handleVoteUpClick}
                      currentUser={currentUser}
                      className="col-sm-10"
                    />
                  );
                }}
              />
              <Route
                path="/topics/:topic"
                render={props => {
                  return (
                    <ArticlesByTopic
                      {...props}
                      topics={topics}
                      currentUserId={currentUser._id}
                      articles={articles}
                      changeVotes={this.changeVotes}
                      handleVoteDownClick={this.handleVoteDownClick}
                      handleVoteUpClick={this.handleVoteUpClick}
                      className="col-sm-10"
                    />
                  );
                }}
              />
              <Route
                path="/topics"
                render={props => {
                  return (
                    <Topics {...props} topics={topics} className="col-sm-10" />
                  );
                }}
              />
              <Route
                path="/users"
                render={props => {
                  return (
                    <Users {...props} users={users} className="col-sm-10" />
                  );
                }}
              />
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <ArticlesByTopic
                      {...props}
                      articles={articles}
                      changeVotes={this.changeVotes}
                      handleVoteDownClick={this.handleVoteDownClick}
                      handleVoteUpClick={this.handleVoteUpClick}
                      className="col-sm-10"
                    />
                  );
                }}
              />
            </Switch>
            <Side />
          </div>
        </div>
      </div>
    );
  }

  changeVotes = (vote, article_id, articles, cb) => {
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

    const newArticles = [...articles];
    let newVotesCount = this.state.votesCount;
    newVotesCount++;

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
        votesCast: newVotesCast,
        votesCount: newVotesCount
      },
      cb
    );
  };

  handleVoteUpClick = (article_id, articles) => {
    const { votesCast } = this.state;
    this.changeVotes("up", article_id, articles, () => {
      if (votesCast[article_id] !== 1) {
        api.updateArticleVoteCount(article_id, "up").catch(console.log);
      }
    });
  };

  handleVoteDownClick = (article_id, articles) => {
    const { votesCast } = this.state;
    this.changeVotes("down", article_id, articles, () => {
      if (votesCast[article_id] !== -1) {
        api.updateArticleVoteCount(article_id, "down").catch(console.log);
      }
    });
  };
}

export default App;
