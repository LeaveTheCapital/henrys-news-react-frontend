import React from "react";
import Button from "./Button";

const Vote = ({
  collection,
  handleVoteUpClick,
  handleVoteDownClick,
  _id,
  votes
}) => (
  <div className="col-sm-1 vote-box">
    <Button
      text="☝"
      className="vote-button"
      onClick={() => handleVoteUpClick(_id, collection)}
    />
    <div className="article-votes">{votes}</div>
    <Button
      text="☟"
      className="vote-button"
      onClick={() => handleVoteDownClick(_id, collection)}
    />
  </div>
);

export default Vote;
