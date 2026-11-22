# Lead Manager – Mini CRM

A full-stack Lead Management application built using the MERN stack. It allows users to manage leads, track their status, and organize customer information through a simple and user-friendly dashboard.

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

### Frontend
- React.js
- Vite
- Axios
- CSS
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
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
│   ├── package.json
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

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/divyansh0704/leadManager.git
cd leadManager
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the values with your MongoDB connection string and a secure JWT secret.

Start the backend server:

```bash
npm start
```

The backend will run at:

`http://localhost:5000`

### 3. Setup the Frontend

Open another terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at:

`http://localhost:5173`

Make sure the frontend API configuration points to your local backend URL when running locally.

## Assumptions

- Each registered user can manage only their own leads.
- Users must log in to access the dashboard and manage leads.
- New leads are assigned the default status `New`.
- Lead information is stored in MongoDB.
- Each lead has basic contact and tracking information such as name, email, phone, company, source, and status.

## Future Improvements

With more development time, I would like to:

- Add automated API testing.
- Improve error handling and validation.
- Add more dashboard analytics and reporting.
- Improve UI responsiveness and performance.

## Live Demo

**Frontend:** https://lead-manager-5xes.vercel.app

**Backend:** https://leadmanager-hqrd.onrender.com

## GitHub Repository

https://github.com/divyansh0704/leadManager

