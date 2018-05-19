import React from "react";

const User = ({ user }) => {
  return <div>
  <div>{user.name}</div>
  <div>{user.username}</div>
  <img src={user.avatar_url}/>
  
  </div>;
};

export default User;
