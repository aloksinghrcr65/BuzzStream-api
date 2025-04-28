# BuzzStream API 🐝

**Stream. Tweet. Connect. Repeat.**

A YouTube-like video hosting platform backend built with modern technologies.  
*Industry-standard practices, secure authentication, and scalable architecture.*

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)

[📁 API Documentation]() | [📐 System Design](https://app.eraser.io/workspace/dnofF8kALK7RTZQeQBEH)

## 🔍 Features

- **Auth System** 🔐
  - JWT Authentication (Access + Refresh Tokens)
  - Secure Password Hashing (Bcrypt)
  - Session Management
- **Video Management** 🎥
  - Upload/Stream Videos
  - Like/Dislike System
  - Comments & Replies
- **User Features** 👥
  - Channel Subscriptions
  - Watch History
  - Playlist Management
  - Profile Customization

## 🛠 Tech Stack

**Core Components**  
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)

**Security**  
![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens)
![Bcrypt](https://img.shields.io/badge/-Bcrypt-0042AA)

**Media Handling**  
![Cloudinary](https://img.shields.io/badge/-Cloudinary-2C39BD?logo=cloudinary)

**Utilities**  
![Mongoose](https://img.shields.io/badge/-Mongoose-880000)
![Dotenv](https://img.shields.io/badge/-Dotenv-ECD53F)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Cloudinary account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aloksinghrcr65/BuzzStream-api.git
    cd BuzzStream-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Copy environment template:
    ```bash
    cp .env
    ```
4. Generate a secret key for JWT in your terminal:
    ```bash
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```

    This will generate a secure random key that you can use for `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET`.

5. .env Configuration:
    - **PORT**: `8000`
    - **MONGODB_URI**: `mongodb+srv://<user>:<password>@cluster.mongodb.net`
    - **CLOUDINARY_CLOUD_NAME**: `your_cloud`
    - **CLOUDINARY_API_KEY**: `your_key`
    - **CLOUDINARY_API_SECRET**: `your_secret`
    - **ACCESS_TOKEN_SECRET**: `your_jwt_secret`
    - **REFRESH_TOKEN_SECRET**: `your_refresh_secret`
    - **ACCESS_TOKEN_EXPIRY**: `1d`
    - **REFRESH_TOKEN_EXPIRY**: `10d`

6. Start the development server:
    ```bash
    npm run dev
    ```

    The server will be running at [http://localhost:8000](http://localhost:8000).

## 👨‍💻 Contact

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?logo=linkedin&logoColor=white)](https://linkedin.com/in/aloksinghrcr65)
[![Instagram](https://img.shields.io/badge/-Instagram-E4405F?logo=instagram&logoColor=white)](https://instagram.com/enlytment_alok)
[![GitHub](https://img.shields.io/badge/-GitHub-black?logo=github&logoColor=white)](https://github.com/aloksinghrcr65)
