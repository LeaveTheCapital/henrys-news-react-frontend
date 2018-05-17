import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Article = ({
  article,
  match,
  changeVotes,
  handleVoteUpClick,
  handleVoteDownClick
}) => (
  <div className="article-div row">
    <div className="container">
      <div className="article-row row">
        <div className="col-sm-1 vote-box">
          <Button
            text="☝"
            className="vote-button"
            onClick={() => handleVoteUpClick(article._id)}
          />
          <div className="article-votes">{article.votes}</div>
          <Button
            text="☟"
            className="vote-button"
            onClick={() => handleVoteDownClick(article._id)}
          />
        </div>
        <div className="col-sm-11">
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
      </div>
    </div>
  </div>
);

export default Article;
