import React from "react";
import {NavLink} from 'react-router-dom'

const Topic = ({ topic }) => {
  return <div>
    <NavLink to={`/topics/${topic.slug}`}>{topic.title}</NavLink>
    </div>;
};

export default Topic;
