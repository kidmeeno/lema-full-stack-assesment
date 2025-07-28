const db = require('../db');
const { v4: uuidv4 } = require('uuid'); 

exports.getPostsByUser = (userId, limit, offset) => {
  return db.prepare(`SELECT id, title, body FROM posts WHERE user_id = ? LIMIT ? OFFSET ?`).all(userId, limit, offset);
};

exports.getPostCountByUser = (userId) => {
  return db.prepare(`SELECT COUNT(*) AS count FROM posts WHERE user_id = ?`).get(userId).count;
};

exports.createPost = (userId, title, body) => {
  const id = uuidv4(); // Generate UUID

  const stmt = db.prepare(`
    INSERT INTO posts (id, user_id, title, body, created_at)
    VALUES (?, ?, ?, ?, datetime('now'))
  `);

  stmt.run(id, userId, title, body);
  return id;
};

exports.getPostById = (id) => {
  return db.prepare(`SELECT id, title, body FROM posts WHERE id = ?`).get(id);
};

exports.deletePost = (postId) => {
  return db.prepare(`DELETE FROM posts WHERE id = ?`).run(postId);
};
