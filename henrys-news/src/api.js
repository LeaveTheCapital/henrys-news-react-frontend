import axios from "axios";

export const getAllArticles = () => {
  return axios.get("https://henrys-news.herokuapp.com/api/articles");
};

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

export const updateCommentVoteCount = (comment_id, vote) => {
  return axios.put(
    `https://henrys-news.herokuapp.com/api/comments/${comment_id}?vote=${vote}`
  );
};

export const updateArticleVoteCount = (article_id, vote) => {
  return axios.put(
    `https://henrys-news.herokuapp.com/api/articles/${article_id}?vote=${vote}`
  );
};

export const postComment = (article_id, body, belongs_to, created_by) => {
  return axios.post(
    `https://henrys-news.herokuapp.com/api/articles/${article_id}/comments`,
    { body, belongs_to, created_by }
  );
};

export const deleteComment = comment_id => {
  return axios.delete(
    `https://henrys-news.herokuapp.com/api/comments/${comment_id}`
  );
};

export const postArticle = (topic_id, title, input, user_id) => {
  return axios.post(
    `https://henrys-news.herokuapp.com/api/topics/${topic_id}/articles`,
    { title, body: input, belongs_to: topic_id, created_by: user_id }
  );
};

// votes on comments
// sort articles / comments
// refactor api calls where not exported (topics)
