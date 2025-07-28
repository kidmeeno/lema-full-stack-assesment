const db = require('../db');

exports.getUsers = (limit, offset) => {
  return db.prepare(`
    SELECT users.id, users.name, users.email, addresses.street, addresses.state, addresses.city, addresses.zipcode
    FROM users
    LEFT JOIN addresses ON users.id = addresses.user_id
    LIMIT ? OFFSET ?
  `).all(limit, offset);
};

exports.getUserCount = () => {
  return db.prepare(`SELECT COUNT(*) AS count FROM users`).get().count;
};

exports.getUserById = (id) => {
  return db.prepare(`SELECT id, name, email FROM users WHERE id = ?`).get(id);
};
