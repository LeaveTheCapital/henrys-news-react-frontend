import axios from "axios";

export const getArticleById = article_id => {
  return axios.get(
    `https://henrys-news.herokuapp.com/api/articles/${article_id}`
  );
};

export const getCommentsByArticleId = article_id => {
  return axios.get(
    `https://henrys-news.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const updateArticleVoteCount = (article_id, vote) => {
  return axios.put(
    `https://henrys-news.herokuapp.com/api/articles/${article_id}?vote=${vote}`
  );
};

export const postComment = (article_id, body, belongs_to, user) => {
  return axios.post(
    `https://henrys-news.herokuapp.com/api/articles/${article_id}/comments`,
    { body, belongs_to, created_by: user  }
  );
};

// TODO delete comment, post article, votes on comments