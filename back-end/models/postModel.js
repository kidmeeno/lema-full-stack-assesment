const db = require('../db');

exports.getPostsByUser = (userId, limit, offset) => {
  return db.prepare(`SELECT id, title, body FROM posts WHERE user_id = ? LIMIT ? OFFSET ?`).all(userId, limit, offset);
};

exports.getPostCountByUser = (userId) => {
  return db.prepare(`SELECT COUNT(*) AS count FROM posts WHERE user_id = ?`).get(userId).count;
};

exports.createPost = (userId, title, body) => {
  const stmt = db.prepare(`
    INSERT INTO posts (user_id, title, body, created_at)
    VALUES (?, ?, ?, datetime('now'))
  `);
  return stmt.run(userId, title, body).lastInsertRowid;
};

exports.getPostById = (id) => {
  return db.prepare(`SELECT id, title, body FROM posts WHERE id = ?`).get(id);
};

exports.deletePost = (postId) => {
  return db.prepare(`DELETE FROM posts WHERE id = ?`).run(postId);
};
