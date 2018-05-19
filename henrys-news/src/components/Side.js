import React from "react";
import { NavLink } from "react-router-dom";
import * as api from '../api'
import './Side.css';

class Side extends React.Component {
  state = {
    articles: [],
    numberOfComments: 0
  }

  componentDidMount() {
    api.getAllArticles()
    .then(({ data }) => {
      const newArticles = data.articles;
      const newNumberOfComments = newArticles.reduce((acc,article)=>{
        acc += article.comment_count;
        return acc
      },0)
      this.setState({
        articles: newArticles,
        numberOfComments: newNumberOfComments
      })
    })
    .catch(console.log);
  }

  render () {
    const {filter, topics, users} = this.props;
    const {articles, numberOfComments} = this.state;
    
  return (
      <section id="side" className="col-xs">
      <div id="side-bar-container" className="container-fluid">
        {topics.map(topic => {
          return (<div key={topic._id} className="row">
          <NavLink to={`/topics/${topic.slug}`} className="side-topic" activeClassName="side-active-topic">{topic.title}</NavLink>
          </div>)
        })}
        {filter && (<div className="row">
        {`Filter: ${filter.toUpperCase()}`}
        </div>)}
        <div className="row">Topics: {`${topics.length}`}</div>
        <div className="row">Users: {`${users.length}`}</div>
        <div className="row">Articles: {`${articles.length}`}</div>
        <div className="row">Comments: {`${numberOfComments}`}</div>
        </div>
      </section>
    );


  }

}

export default Side;
