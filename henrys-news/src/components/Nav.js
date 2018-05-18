import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ topics }) => {
  return (
    <nav id="nav" className="col-sm-6">
    {/* <div id="align-right"> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/topics">Topics</NavLink>

      {topics.map(topic => (
        <NavLink key={topic._id} to={`/topics/${topic.slug}`} activeClassName="active-topic-name" className="topic-name">
          {topic.title}
        </NavLink>
      ))}
      <NavLink to="/users">Users</NavLink>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
