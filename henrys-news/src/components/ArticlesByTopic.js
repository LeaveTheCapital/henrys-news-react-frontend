import React from "react";
import Article from "./Article";

const ArticlesByTopic = ({ articles, className, match }) => {
  const topic = match.params.topic;
  const articlesByTopic = articles.filter(
    article => article.belongs_to.slug === topic
  );
  return (
    <div className={className}>
      {articlesByTopic.map(article => {
        return <Article article={article} />;
      })}
    </div>
  );
};

export default ArticlesByTopic;
