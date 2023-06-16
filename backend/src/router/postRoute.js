const { Router } = require("express");
const postController = require("../controllers/posts.controller");

const postRoute = Router();

postRoute.get("/", postController.getAllPosts);

module.exports = postRoute;
