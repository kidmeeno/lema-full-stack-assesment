const postModel = require('../models/postModel');

exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  const result = postModel.deletePost(postId);

  if (result.changes === 0) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json({ success: true });
};

exports.createPost = (req, res) => {
  const userId = req.params.id;
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required.' });
  }

  const id = postModel.createPost(userId, title, body);
  const newPost = postModel.getPostById(id);

  res.status(201).json({ post: newPost });
};
