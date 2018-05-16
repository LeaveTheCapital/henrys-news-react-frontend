import React from "react";
import "./ArticleMain.css";
import { Link } from "react-router-dom";

const ArticleMain = ({ articles, match, className }) => {
  const article_id = match.params.article_id;
  const article = articles.find(article => article._id === article_id);
  console.log(article);
  return (
    <div className={className}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>
        <span>{article.created_by.name} | </span>
        <span> Comments: {article.comment_count}</span>
        <Link to={`/topics/${article.belongs_to.slug}`}>
          {" "}
          /topics/{article.belongs_to.slug}
        </Link>
      </p>
    </div>
  );
};

export default ArticleMain;
