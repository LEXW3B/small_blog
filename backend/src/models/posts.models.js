const conn = require('./connection');

const getAllPosts = async () => {
  const [allPost] = await conn.execute('SELECT * FROM posts');

  return allPost;
};

const getPostById = async (id) => {
  const [[result]] = await conn.execute('SELECT * FROM posts WHERE id = ?', [id]);

  return result;
};

const insertPost = async (owner, title, body) => {
  const [{ insertId }] = await conn.execute('INSERT INTO posts (owner, title, body) VALUES (?, ?, ?)', [owner, title, body]);

  return insertId;
};

const deletePost = async (id) => {
  await conn.execute('DELETE FROM posts WHERE id = ?', [id]);
};

module.exports = {
  getAllPosts,
  insertPost,
  getPostById,
  deletePost,
};
