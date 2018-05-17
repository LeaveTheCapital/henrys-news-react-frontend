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

class App extends Component {
  state = {
    topics: constants.topics,
    users: constants.users,
    currentUser: constants.users[0]
  };

  componentDidMount() {
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
    const { topics, articles, users, currentUser } = this.state;
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
                  return <ArticleMain {...props} className="col-sm-10" />;
                }}
              />
              <Route
                path="/topics/:topic"
                render={props => {
                  return (
                    <ArticlesByTopic
                      {...props}
                      articles={articles}
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

  vote = () => {};
}

export default App;
