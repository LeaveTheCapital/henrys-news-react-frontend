import React from "react";
import User from "./User";

const Users = ({ users, className }) => {
  return (
    <div className={className}>
      {users.map(user => {
        return <User user={user} />;
      })}
    </div>
  );
};

export default Users;
