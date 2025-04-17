# 📩 Saraha App

An anonymous messaging application built with Node.js and Express, inspired by platforms like Saraha. Users can register, log in, and receive anonymous messages from others without knowing the sender 🕵️‍♂️.

---

## ✨ Features

- 👤 User registration and login with encrypted passwords.
- 🔐 JWT-based authentication.
- 💬 Send and receive anonymous messages.
- 🧠 Input validation with Joi.
- 🗄️ MongoDB integration using Mongoose.
- ⚙️ Environment variable support with dotenv.

---

## 🛠️ Technologies Used

- 🟩 Node.js
- ⚡ Express.js
- 🍃 MongoDB + Mongoose
- 🔑 JSON Web Tokens (JWT)
- 📏 Joi for validation
- 🔒 bcryptjs for password hashing
- 🧪 dotenv for environment configuration

---

## 📁 Project Structure

Saraha App/
├── index.js               # 🚀 Entry point
├── .env                   # 🔐 Environment variables
├── package.json           # 📦 Project metadata
├── DB/
│   ├── connection.js      # 🔌 DB connection
│   └── models/
│       ├── usermodels.js      # 👤 User schema
│       ├── messagemodels.js   # 💬 Message schema
│       └── tokenmodels.js     # 🛡️ Token schema



