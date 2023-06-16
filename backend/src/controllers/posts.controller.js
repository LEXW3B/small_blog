const { postService } = require("../services");

const getAllPosts = async (_req, res) => {
  const post = await postService.getAllPosts();

  res.status(200).json(post);
};

module.exports = {
  getAllPosts,
};
