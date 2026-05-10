# 📚 Drizzle Bookstore API

A Dockerized RESTful API for managing a bookstore, built with **Node.js**, **Express**, **PostgreSQL**, and **Drizzle ORM (JavaScript)**.

---

## 🚀 Features

* 📖 Full CRUD functionality for books
* 🧱 Clean backend architecture (routes, controllers, services)
* 🗄️ PostgreSQL integration using Drizzle ORM
* 🐳 Dockerized database setup
* ⚡ Lightweight and fast REST API
* 🔧 Environment-based configuration

---

## 🛠️ Tech Stack

* **Node.js (JavaScript)**
* **Express**
* **Drizzle ORM**
* **PostgreSQL**
* **Docker**

---

## 📁 Project Structure

```
src/
│
├── db/
│   ├── schema.js
│   └── index.js
│
├── controllers/
├── services/
├── routes/
│
└── app.js
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/drizzle-bookstore-api.git
cd drizzle-bookstore-api
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/bookstore
PORT=3000
```

---

### 4. Start PostgreSQL with Docker

```bash
docker-compose up -d
```

---

### 5. Run Database Migrations

```bash
npx drizzle-kit generate
npx drizzle-kit push
```

---

### 6. Start the Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 📘 Books

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| POST   | /books     | Create a book   |
| GET    | /books     | Get all books   |
| GET    | /books/:id | Get single book |
| PUT    | /books/:id | Update a book   |
| DELETE | /books/:id | Delete a book   |

---

## 📦 Sample Request Body

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 1500,
  "stock": 10
}
```

---

## 🧪 Testing

You can test endpoints using:

* Postman
* Thunder Client
* cURL

---

## 🔥 Future Improvements

* 🔐 Authentication (JWT)
* 👤 User roles (Admin/User)
* 🔍 Search & filtering
* 📄 Pagination
* 🛒 Order & checkout system
* ⚡ Redis caching
* 📊 Admin dashboard

---

## 🧑‍💻 Author

**IJIYEMI SAMUEL ADEYEMI**

---

## 📄 License

This project is open-source under the **MIT License**.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
