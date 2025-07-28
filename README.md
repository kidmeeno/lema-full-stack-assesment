```markdown
# 🌐 Lema Fullstack App

This is the **Lema Assessment** fullstack project — a user-post management platform built with **React** (frontend) and **Node.js + Express + SQLite** (backend).

---

## 📁 Folder Structure

```

root/
├── front-end/   # React (Vite) frontend
├── back-end/    # Express.js + SQLite backend

````

---

## ✨ Features

### Frontend (`/front-end`)

- Paginated user list with address
- View individual user posts
- Create & delete user posts
- Fully responsive layout
- Smooth API interaction using `axios` + `React Query`
- Unit testing with Jest + React Testing Library

### Backend (`/back-end`)

- RESTful API for users and posts
- Paginated responses
- SQLite database with `better-sqlite3`
- CORS enabled (for deployed frontend only)
- Modular route setup

---

## 🛠️ Tech Stack

| Layer     | Tech Used                                                   |
|-----------|-------------------------------------------------------------|
| Frontend  | React, Vite, Tailwind CSS, React Router, Axios, React Query |
| Backend   | Node.js, Express, SQLite (better-sqlite3), CORS             |
| Testing   | Jest, React Testing Library                                 |
| Deployment| Vercel (frontend), Render (backend)                         |

---

## 🚀 Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/lema-fullstack.git
cd lema-fullstack
````

### 2. Start the backend

```bash
cd back-end
npm install
npm run dev
```

Make sure `data.db` exists in `back-end/`.

### 3. Start the frontend

```bash
cd ../front-end
npm install
npm run dev
```

---

## 🌍 Deployed Links

* 🔗 **Frontend:** [`https://lema-frontend-phi.vercel.app`](https://lema-frontend-phi.vercel.app)
* 🔗 **Backend API:** [`https://lemaassesmentbackend.onrender.com`](https://lemaassesmentbackend.onrender.com)

---

## 📡 API Endpoints

> Base URL: `/api`

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | `/users?page=1&limit=4` | Fetch paginated users |
| GET    | `/users/:id/posts`      | Get posts for a user  |
| POST   | `/users/:id/posts`      | Add a post for a user |
| DELETE | `/posts/:postId`        | Delete a post         |

---

## 🧪 Testing

To run frontend unit tests:

```bash
cd front-end
npm test
```

---

## 📌 Notes

* CORS on backend only allows the deployed frontend origin.
* SQLite database is required (`data.db`) in backend folder.
* You can use `concurrently` or `npm-run-all` to run both together (optional).

---

## 👤 Author

**Bosah Arthur**
GitHub: [@kidmeeno](https://github.com/kidmeeno)
Email: [arthurbosah41@gmail.com](mailto:arthurbosah41@gmail.com)
LinkedIn: [linkedin.com/in/bosah-arthur-11316375](https://www.linkedin.com/in/bosah-arthur-11316375/)

---

## 📄 License

MIT

````
