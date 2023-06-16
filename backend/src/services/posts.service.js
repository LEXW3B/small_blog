const { postModel } = require("../models");

const getAllPosts = async () => {
  const post = await postModel.getAllPost();

  return post;
};

module.exports = {
  getAllPosts,
};
