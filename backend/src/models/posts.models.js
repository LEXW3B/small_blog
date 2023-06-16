const conn = require('./connection');

const getAllPost = async () => {
    const [result] = await conn.execute('SELECT * FROM posts');

    return result;
};

module.exports = {
    getAllPost,
};
