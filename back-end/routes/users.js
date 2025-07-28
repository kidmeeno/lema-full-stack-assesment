const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const postController = require('../controller/postController');

router.get('/users', userController.getUsers);
router.get('/users/:id/posts', userController.getUserPosts);
router.post('/users/:id/posts', postController.createPost);
router.delete('/posts/:postId', postController.deletePost);

module.exports = router;
