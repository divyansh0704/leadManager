# Lead Manager – Mini CRM

A full-stack Lead Management application built using the MERN stack. It allows users to manage leads, track their status, and organize customer information through a simple dashboard.

## Features

- **User Authentication:** Signup, login, and logout using JWT authentication.
- **Lead Management:** Create, view, update, and delete leads.
- **Search & Filter:** Search leads by name and filter them by status.
- **Sorting:** Sort leads by name or creation date.
- **Pagination:** Display leads in manageable pages.
- **Dashboard:** View total leads and counts based on their status.
- **Data Privacy:** Each user can access only their own leads.
- **Validation:** Frontend and backend validation for lead information.

## Tech Stack

**Frontend**
- React.js
- Vite
- Axios
- CSS
- Lucide React

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cookie-parser

## Project Structure

```text
leadManager/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd leadManager
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Start the backend:

```bash
npm start
```

### 3. Setup the Frontend

Open another terminal:

```bash
cd frontend
npm install