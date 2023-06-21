const { postModel } = require('../models');

const getAllPosts = async () => {
  const allPost = await postModel.getAllPosts();

  return allPost;
};

const getPostById = async (id) => {
  const post = await postModel.getPostById(id);

  return post;
};

const insertPost = async (owner, title, body) => {
  const insertId = await postModel.insertPost(owner, title, body);

  if (!insertId) return { type: 404, message: 'Post não inserido' };

  const post = await postModel.getPostById(insertId);
  return post;
};

const deletePost = async (id) => {
  await postModel.deletePost(id);
  const deleteItem = await postModel.getPostById(id);

  if (!deleteItem) return { type: 204, message: 'Excluído com sucesso' };

  return null;
};

module.exports = {
  getAllPosts,
  insertPost,
  getPostById,
  deletePost,
};
