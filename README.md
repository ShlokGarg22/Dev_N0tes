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
