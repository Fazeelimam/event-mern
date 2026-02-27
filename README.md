# 🎉 Event Management System (MERN Stack)

A **full-stack Event Management Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The application allows users to:

- Create an account
- Login securely
- Explore event services
- Contact the event team
- Send messages stored in MongoDB

This project demonstrates **full-stack development, authentication, REST APIs, and modern frontend UI design**.

---

# 🚀 Live Demo

**Frontend:**  
https://event-mern.netlify.app

**Backend API:**  
Add your backend deployment URL here.

---

# ✨ Features

## 🔐 User Authentication

- Secure User Signup
- Login system using **JWT Authentication**
- Password encryption using **bcrypt**
- Logout functionality
- Authentication token stored in **localStorage**

---

## 📩 Contact Message System

Users can send contact messages directly from the website.

Features:

- Input validation
- MongoDB database storage
- Success & error notifications using **React Toastify**

---

## 🎨 Responsive UI

The application includes:

- Responsive Navbar
- Hero landing section
- Event services showcase
- Contact page with Google Maps
- Toast notifications
- Mobile responsive design

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- React Toastify
- Font Awesome
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- cookie-parser
- cors
- dotenv

---

# 📂 Project Structure
event-management
│
├── backend
│ ├── controller
│ │ ├── auth.js
│ │ └── message.js
│ │
│ ├── model
│ │ ├── user.js
│ │ └── message.js
│ │
│ ├── router
│ │ ├── auth.js
│ │ └── message.js
│ │
│ ├── lib
│ │ └── Generate.js
│ │
│ ├── Connection
│ │ └── conn.js
│ │
│ ├── index.js
│ └── package.json
│
├── frontend
│ ├── Authentication
│ │ ├── Login.jsx
│ │ └── Signup.jsx
│ │
│ ├── Components
│ │ ├── Navbar.jsx
│ │ ├── Home.jsx
│ │ ├── Services.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ │
│ ├── Lib
│ │ └── axios.js
│ │
│ └── styles
│
└── README.md

# ⚙️ Installation

## 1️⃣ Clone the Repository

git clone https://github.com/yourusername/event-management.git
cd event-management

## 2️⃣ Backend Setup
cd backend
npm install

Run backend server:
npm run dev

Server will run on:
http://localhost:2000

## 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend will run on:
http://localhost:5173
---

# 📸 Screenshots
## Home Page

<img width="960" height="439" alt="1" src="https://github.com/user-attachments/assets/d2164c60-d029-4e7a-9959-a2cdb0bf5759" />

## Login Page
<img width="959" height="440" alt="7" src="https://github.com/user-attachments/assets/60daf855-3912-418a-a194-056437bb3f6d" />

## Signup Page
<img width="959" height="437" alt="5" src="https://github.com/user-attachments/assets/0c2e563e-7048-4eca-988f-a2062f023492" />

## Services
<img width="955" height="440" alt="2" src="https://github.com/user-attachments/assets/72ba3e39-10ab-4c9e-b812-250d454b8c13" />


## Contact Page
<img width="959" height="403" alt="3" src="https://github.com/user-attachments/assets/4ccf3ede-2d9b-4615-bc93-bc2c684a95cf" />

⭐ Support
If you like this project, please give it a star ⭐ on GitHub.
