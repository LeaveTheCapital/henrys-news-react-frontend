import React from "react";
import moment from "moment";
import Button from "./Button";
import "./comment.css";
import Vote from "./Vote";

const Comment = ({
  comment,
  className,
  currentUserId,
  handleDeleteClick,
  handleCommentVoteUpClick,
  handleCommentVoteDownClick
}) => {
  const voteStr = comment.votes === 1 ? "vote" : "votes";
  const username = comment.created_by.username;
  const timestamp = moment(comment.created_at).fromNow();
  return (
    <div className="row comment-row">
      <Vote
        collection={comment}
        _id={comment._id}
        votes={comment.votes}
        handleVoteUpClick={handleCommentVoteUpClick}
        handleVoteDownClick={handleCommentVoteDownClick}
      />
      <div className="col-sm-11">
        <p>
          <span>{username}</span>
          &nbsp;&nbsp;
          {comment.votes}&nbsp;{voteStr}
          &nbsp;&nbsp;  posted:&nbsp;{timestamp}
        </p>
        <p>
          {comment.body}
          <span>
            &nbsp;
            {comment.created_by._id === currentUserId && (
              <Button
                text="delete"
                className="btn"
                onClick={() => handleDeleteClick(comment._id)}
              />
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
