````markdown
# 📦 Lema Backend API

This is the backend service for the **Lema** project. It provides a simple RESTful API built with **Express.js** and **SQLite (better-sqlite3)**, responsible for user and post management.

> 📁 This folder is part of a monorepo. See the [root README](../README.md) for fullstack setup (frontend + backend).

---

## 🚀 Features

- Users & addresses fetching (paginated)
- User-specific posts fetching (paginated)
- Create a post for a user
- Delete a post
- CORS configuration for frontend connection
- Clean and modular route architecture

---

## ⚙️ Technologies

- **Node.js**
- **Express.js**
- **better-sqlite3**
- **SQLite**
- **CORS**
- **Render** (deployment)

---

## 🧪 API Endpoints

> Base URL: `/api`

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | `/users?page=1&limit=4` | Fetch paginated users + addresses |
| GET    | `/users/:id/posts`      | Get a user's posts                 |
| POST   | `/users/:id/posts`      | Add a post for a user              |
| DELETE | `/posts/:postId`        | Delete a specific post             |

---

## 🌐 CORS Setup

CORS is enabled for the deployed frontend domain only:

```js
cors({
  origin: 'https://lema-frontend-phi.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});
````

---

## 🧑‍💻 Running Locally (Backend Only)

1. **Navigate to the backend directory**

```bash
cd backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Ensure `data.db` is present** in the root of the backend folder.

4. **Run the server**

```bash
npm run dev
```

API should be live at:
`http://localhost:8080/api`

---

## 🚢 Deployment

Deployed on **Render**
👉 `https://lemaassesmentbackend.onrender.com`

To deploy:

* Push to GitHub
* Connect to Render
* Set Build Command: `npm install`
* Set Start Command: `npm start`

---

## 🧠 Notes

* No authentication/authorization (for simplicity)
* Assumes SQLite `data.db` is already seeded
* Can be connected to the frontend in `/frontend`

---

## 👨‍💼 Author

**Bosah Arthur**
Email: [arthurbosah41@gmail.com](mailto:arthurbosah41@gmail.com)

---

```