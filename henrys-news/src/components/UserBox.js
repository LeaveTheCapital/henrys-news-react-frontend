import React from "react";
import "./UserBox.css";

const UserBox = ({ currentUser }) => (
  <section id="user-box" className="col-sm">
    <span id="user-name">{currentUser.name}</span>
    <img id="user-avatar" src={currentUser.avatar_url} alt="user avatar" />
  </section>
);

export default UserBox;
