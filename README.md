# BizTrack Application

A full-stack business tracking application built with React (frontend) and Node.js/Express (backend).

## Project Structure

```
biztrack-app/
├── frontend/          # React + TypeScript frontend
├── backend/           # Node.js + Express backend
├── .gitignore         # Root gitignore
└── README.md          # This file
```

## Quick Start

### Backend Setup

1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Copy environment file: `cp .env.example .env`
4. Update `.env` with your MongoDB Atlas credentials
5. Start development server: `npm run dev`

### Frontend Setup

1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Available Routes

### Frontend Routes

- `/` - Home page
- `/register` - User registration
- `/dashboard` - User dashboard

### Backend API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

## Technologies Used

### Frontend

- React 18
- TypeScript
- Vite
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcryptjs for password hashing

## Development

Both frontend and backend support hot reloading during development.

## Documentation

For detailed setup and usage instructions, see the README files in the respective directories:

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
