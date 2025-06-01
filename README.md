# Portfolio Project

This is a full-stack portfolio website project built with React.js for the frontend and Node.js/Express.js for the backend.

## Live Demo
- Frontend: [https://hemil-patel.vercel.app/](https://hemil-patel.vercel.app/)
- Backend: Deployed on Render

## Project Structure

The project is divided into two main parts:
- `client/` - Frontend React application (Deployed on Vercel)
- `server/` - Backend Node.js/Express.js server (Deployed on Render)

## Frontend (Client)

The frontend is built using React.js with the following key features and dependencies:
- React Router for navigation
- FontAwesome for icons
- React Toastify for notifications
- React TSParticles for particle effects
- React Type Animation for typing animations
- AOS (Animate On Scroll) for scroll animations

### Getting Started with Frontend

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Backend (Server)

The backend is built using Node.js and Express.js with the following features:
- MongoDB database integration using Mongoose
- RESTful API endpoints
- CORS enabled
- Nodemailer for email functionality
- Input validation using validator

### Getting Started with Backend

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with necessary environment variables:
```
PORT=6002
MONGODB_URI=your_mongodb_connection_string
```

4. Start the server:
```bash
node app.js
```

The backend server will run on `http://localhost:6002`

## Deployment

### Frontend Deployment (Vercel)
- The frontend is deployed on Vercel
- Automatic deployments on push to main branch
- Environment variables configured in Vercel dashboard

### Backend Deployment (Render)
- The backend is deployed on Render
- Automatic deployments on push to main branch
- Environment variables configured in Render dashboard

## Technologies Used

### Frontend
- React.js
- React Router DOM
- FontAwesome
- React Toastify
- React TSParticles
- React Type Animation
- AOS (Animate On Scroll)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- CORS
- Validator

## Features
- Responsive design
- Modern UI/UX
- Contact form with email functionality
- Animated components
- Particle effects
- Type animations
- Scroll animations
- Fully deployed and production-ready

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the ISC License.
