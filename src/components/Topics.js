import React from "react";
import Topic from "./Topic";

const Topics = ({ topics, className }) => {
  return (
    <div className={className}>
      {topics.map(topic => {
        return <Topic key={topic._id} topic={topic} />;
      })}
    </div>
  );
};

export default Topics;
