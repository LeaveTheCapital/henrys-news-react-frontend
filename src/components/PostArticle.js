import React from "react";
import Button from "./Button";
import "./PostArticle.css";

class PostComment extends React.Component {
  state = {
    input: "",
    titleInput: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps.articleCount !== this.props.articleCount) {
      this.setState({
        input: "",
        titleInput: ""
      });
    }
  }

  render() {
    const { className, onClick, topic_slug } = this.props;
    const { input, titleInput } = this.state;

    return (
      <div className={className}>
        <input
          value={titleInput}
          id="title-input"
          type="text"
          placeholder="title.."
          onChange={e => this.handleChange(e, "titleInput")}
        />
        <input
          value={input}
          id="article-input"
          type="text"
          placeholder="your article.."
          onChange={e => this.handleChange(e, "input")}
        />
        <Button
          text="submit"
          className="btn"
          onClick={() => onClick(topic_slug, titleInput, input)}
        />
      </div>
    );
  }

  handleChange = (event, context) => {
    const value = event.target.value;
    this.setState({
      [context]: value
    });
  };
}

export default PostComment;
