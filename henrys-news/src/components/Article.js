import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ article, match }) => (
  <div className="article-div">
    <h2>
      <Link
        to={`/topics/${article.belongs_to.slug}/${article._id}`}
        className="article-link"
      >
        {article.title}
      </Link>
    </h2>
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

export default Article;
