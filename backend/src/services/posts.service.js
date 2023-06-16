const { postModel } = require("../models");

const getAllPosts = async () => {
  const post = await postModel.getAllPosts();

  return post;
};

module.exports = {
  getAllPosts,
};
