import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ topics }) => {
  return (
    <nav id="nav" className="col-sm-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/topics">Topics</NavLink>

      {topics.map(topic => (
        <NavLink to={`/topics/${topic.slug}`}>{topic.title}</NavLink>
      ))}
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
};

export default Nav;
