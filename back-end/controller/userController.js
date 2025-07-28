const userModel = require('../models/userModel');
const postModel = require('../models/postModel');

exports.getUsers = (req, res) => {
  const page = parseInt(req.query.page || '1');
  const limit = parseInt(req.query.limit || '4');
  const offset = (page - 1) * limit;

  const users = userModel.getUsers(limit, offset);
  const total = userModel.getUserCount();

  res.json({ data: users, total });
};

exports.getUserPosts = (req, res) => {
  const userId = req.params.id;
  const page = parseInt(req.query.page || '1');
  const limit = parseInt(req.query.limit || '5');
  const offset = (page - 1) * limit;

  const posts = postModel.getPostsByUser(userId, limit, offset);
  const count = postModel.getPostCountByUser(userId);
  const user = userModel.getUserById(userId);

  res.json({ user, posts, total: count });
};
