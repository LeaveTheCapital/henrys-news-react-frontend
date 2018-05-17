import React from "react";
import Button from "./Button";
import "./CommentInput.css";

class CommentInput extends React.Component {
  state = {
    input: ""
  };

  render() {
    const { className, onClick, article_id } = this.props;
    const { input } = this.state;

    return (
      <div className={className}>
        <input
          id="comment-input"
          type="text"
          placeholder="your comment.."
          onChange={this.handleChange}
        />
        <Button
          text="submit"
          className="btn"
          onClick={() => onClick(article_id, input)}
        />
      </div>
    );
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };
}

export default CommentInput;
