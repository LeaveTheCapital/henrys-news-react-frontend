import React, { Component } from "react";
import Article from "./Article";

class Home extends Component {
  render() {
    const { articles, className } = this.props;
    return (
      <div className={className}>
        <div className="container-fluid">
          {articles.map(article => (
            <Article key={article._id} article={article} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
