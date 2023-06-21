const { Router } = require('express');
const postController = require('../controllers/posts.controller');

const postRoute = Router();

postRoute.get('/', postController.getAllPosts);
postRoute.get('/:id', postController.getPostById);
postRoute.post('/', postController.insertPost);
postRoute.delete('/:id', postController.deletePost);

module.exports = postRoute;
