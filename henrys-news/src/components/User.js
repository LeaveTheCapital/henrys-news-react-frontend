import React from "react";

const User = ({ user, index }) => {
  console.log(index)
  return <div>
  <div>{user.name}&nbsp;
  {index === 0 && <span style={{border: '1px solid black'}}>Our most active scribe!</span>}
  <span style={{fontStyle: 'italic'}}>&nbsp;{user.number_of_articles} Articles</span>
  </div>
  <div>{user.username}</div>
  <img src={user.avatar_url}/>
  
  </div>;
};

export default User;
