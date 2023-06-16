const conn = require("./connection");

const getAllPosts = async () => {
  const [result] = await conn.execute("SELECT * FROM posts");

  return result;
};

module.exports = {
  getAllPosts,
};
