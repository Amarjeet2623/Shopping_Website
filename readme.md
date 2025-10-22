🛒 CloudShop – Modern Online Shopping Platform

🌐 Live Demo: https://shopping-website-rose-five.vercel.app/

🧩 Overview

CloudShop is a modern full-stack e-commerce platform built with the MERN stack.
It enables users to browse products, manage carts, and place orders securely, with a responsive UI and optimized performance.

The project demonstrates a complete shopping workflow, from authentication to checkout, with a clean architecture and modular codebase.

✨ Features

👤 User Authentication — Secure login & signup using JWT with protected routes

🏷️ Product Management — Browse, search, filter, and view product details

🛒 Cart System — Add, remove, and update products in real time

💳 Order Checkout — Place and track orders seamlessly

🧾 Admin Dashboard — Manage users, products, and orders (optional)

📱 Responsive Design — Fully functional on desktop and mobile

⚙️ RESTful APIs — Clean, reusable, and scalable backend architecture

⚡ Optimized Performance — Built with React + Tailwind for a smooth UX

🛠️ Tech Stack
Layer	Technologies & Tools
Frontend	React.js, TailwindCSS, Axios, Zustand/Redux
Backend	Node.js, Express.js
Database	MongoDB Atlas (via Mongoose ORM)
Authentication	JSON Web Tokens (JWT)
Deployment	Vercel (Frontend), Render (Backend), MongoDB Atlas
⚡ Getting Started
🔑 Prerequisites

Node.js
 and npm installed

MongoDB Atlas
 account

🚀 Installation
# Clone the repository
git clone https://github.com/yourusername/cloudshop.git
cd cloudshop

🖥️ Backend Setup
cd backend
npm install


Create a .env file inside /backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run the backend server:

npm run dev

💻 Frontend Setup
cd ../frontend
npm install


Create a .env.local file inside /frontend:

VITE_API_URL=http://localhost:5000


Run the frontend:

npm run dev


Now visit 👉 http://localhost:5173

📁 Project Structure
cloudshop/
├── backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth & error handling
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # All app pages
│   │   ├── context/     # Global state (Redux/Zustand)
│   │   └── App.js
│   ├── .env.local
│   └── vite.config.js
│
└── README.md

🔗 API Endpoints
Endpoint	Description
/api/auth	Register / Login users
/api/products	Get, search, and manage products
/api/cart	Manage shopping cart items
/api/orders	Place and view user orders
/api/admin	Admin-level operations (optional)
💡 Future Enhancements

💳 Integrate Stripe / Razorpay for payments

⭐ Add product reviews and ratings

🔔 Enable real-time order updates

📊 Add admin analytics and reports

📱 Build a mobile app (React Native)

👨‍💻 Author

Amarjeet Kumar
🔗 GitHub
 • LinkedIn

📄 License

This project is licensed under the MIT License.

🙏 Acknowledgements

MongoDB Atlas – Cloud Database

Vercel & Render – Deployment Platforms

React + TailwindCSS – Frontend Framework

Express.js + Node.js – Backend Framework