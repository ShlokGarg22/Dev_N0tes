
<h1 align="center">📝 Dev N0tes — MERN Stack Note-Taking App ✨</h1>

<p align="center">
  A full-stack note-taking app built with the MERN stack.<br>
  Create, edit, delete notes, and learn modern full-stack practices.<br>
  <strong>Perfect for beginners and resumes!</strong>
</p>

---

## 🚀 Highlights

- 🧱 **Full-Stack App** built with **MongoDB**, **Express**, **React**, and **Node**
- ✨ Create, update, and delete notes with title & description
- ⚙️ **Rate Limiting with Upstash Redis** — real-world example, explained simply
- 🌐 Learn and use **HTTP methods**, **status codes**, and **REST API** structure
- 💡 Understand **SQL vs NoSQL** with hands-on experience
- 📱 **Responsive UI** built with Tailwind CSS
- 🧪 Build & test a fully functional **REST API**
- 📦 Includes a simple **deployment guide**
- 🎯 Designed for **absolute beginners**

---

## 🧪 Environment Setup

### Backend (`/backend`)

Create a `.env` file inside `/backend` with the following keys:

```env
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

---

## 🔧 Run the App Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 Folder Structure

```
Dev_N0tes/
├── backend/       # Express + MongoDB API
├── frontend/      # React + Vite UI
├── .gitignore     
├── README.md
└── package.json   # optional root config (if monorepo-style)
```

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Express, MongoDB, Mongoose
- **Other**: Upstash Redis, dotenv, CORS, Nodemon

---

## 📦 Deployment Options

- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway / Cyclic

➡️ Add your live URL to the top of this README when deployed!

---

## 🧠 Want to Learn More?

> Use this project to understand:
> - How frontend & backend talk to each other
> - RESTful APIs with real DB and Redis caching
> - Modern Git, GitHub, and deployment workflows

---

## 📜 License

MIT — use freely and share knowledge!
