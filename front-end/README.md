````markdown
# 💡 Lema Frontend (React)

This is the frontend UI for the **Lema** platform — a user-post management interface built using **React**, **Vite**, and **Tailwind CSS**.

> 📁 This folder is part of a monorepo. See the [root README](../README.md) for fullstack setup (frontend + backend).

---

## ✨ Features

- Fetch and display paginated users and their addresses
- View individual user posts
- Create and delete posts dynamically
- Fully responsive layout (mobile-first)
- Clean UI with reusable components
- Smooth API integration with error handling

---

## 🧰 Technologies Used

- **React** (with TypeScript)
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React Query** (TanStack)
- **Jest + React Testing Library**
- **Vercel** (deployment)

---

## 🧪 Testing

Unit tests are written using:

- **Jest**
- **React Testing Library**

To run tests:

```bash
npm test
````

---

## 🔌 API Integration

All data is fetched from the backend hosted at:

```
https://lemaassesmentbackend.onrender.com
```

Endpoints used:

* `GET /users`
* `GET /users/:id/posts`
* `POST /users/:id/posts`
* `DELETE /posts/:postId`

---

## 🧑‍💻 Running Locally (Frontend Only)

1. **Navigate to frontend directory**

```bash
cd frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm run dev
```

App will be live at: `http://localhost:3000`

---

## 🌐 Deployment

Deployed on **Vercel**
👉 `https://lema-frontend-phi.vercel.app`

To deploy:

* Push to GitHub
* Connect the `frontend/` directory to Vercel
* Set build command: `npm run build`
* Set output directory: `dist`

---

## 📌 Notes

* All API requests use `axios` + `react-query`
* Responsive grid for post cards (`min-[270px]`, max width handled via Tailwind)
* CORS configured in backend for deployed frontend

---

## 👨‍💼 Author

**Bosah Arthur**
GitHub: [kidmeeno](https://github.com/kidmeeno)
LinkedIn: [Bosah Arthur](https://www.linkedin.com/in/bosah-arthur-11316375/)

---

## 📄 License

MIT

```
