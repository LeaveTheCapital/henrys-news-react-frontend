import React, { Component } from "react";
import Article from "./Article";

class Home extends Component {
  render() {
    const { articles, className } = this.props;
    return (
      <div className={className}>
        {articles.map(article => <Article article={article} />)}
      </div>
    );
  }
}

export default Home;
