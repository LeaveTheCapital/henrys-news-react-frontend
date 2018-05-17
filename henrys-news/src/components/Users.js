import React from "react";
import User from "./User";

const Users = ({ users, className }) => {
  return (
    <div className={className}>
      {users.map(user => {
        return <User key={user._id} user={user} />;
      })}
    </div>
  );
};

export default Users;
