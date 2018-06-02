import React from "react";
import User from "./User";
import * as api from '../api';

class Users extends React.Component {
  state = {
    sortedUsers: []
  }

  componentDidMount() {
    const {users} = this.props;
    api.getAllArticles()
  .then(({data})=> {
    const userActivity = data.articles.reduce((acc, article)=>{
      if(!acc[article.created_by._id]){
        acc[article.created_by._id] = 1
      } else {
        acc[article.created_by._id]++
      }
      return acc;
    },{})
    const newUsers = users.slice()
    const userPromises = newUsers.map(user=> {
      return api.getUserProfileInfo(user.username)
    })
    Promise.all(userPromises)
    .then(newUsersData=>{
      newUsers.forEach((newUser, i)=> {
        newUser.number_of_articles = userActivity[newUsersData[i].data.user._id];
      })
      newUsers.sort((a,b)=>b.number_of_articles - a.number_of_articles)
      this.setState({
        sortedUsers: newUsers
      })
    })
  })
  }

  render () {
    const {sortedUsers} = this.state;
    const {className} = this.props;
  return (
    <div className={className}>
      {sortedUsers.map((user, i) => {
        return <User key={user._id} index={i} user={user} />;
      })}
    </div>
    )}
};

export default Users;
