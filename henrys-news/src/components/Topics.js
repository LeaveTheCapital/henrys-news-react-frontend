import React from "react";
import Topic from "./Topic";

const Topics = ({ topics, className }) => {
  return (
    <div className={className}>
      {topics.map(topic => {
        return <Topic topic={topic} />;
      })}
    </div>
  );
};

export default Topics;
