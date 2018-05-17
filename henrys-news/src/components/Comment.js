import React from "react";
import { Link } from "react-router-dom";
import "./comment.css";

const Comment = ({ comment, className }) => {
  const voteStr = comment.votes === 1 ? "vote" : "votes";
  const userId = comment.belongs_to;
  const username = comment.created_by.username;
  return (
    <div className={className}>
      <p>
        <Link to={`/users/${userId}`}>{username}</Link>
        &nbsp;
        {comment.votes}&nbsp;{voteStr}
      </p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
