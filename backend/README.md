# BizTrack Backend

A Node.js backend API built with Express.js and MongoDB Atlas.

## Features

- **Express.js** - Fast, unopinionated web framework
- **MongoDB Atlas** - Cloud database
- **JWT Authentication** - Secure user authentication
- **Security Middleware** - Helmet, CORS, Rate limiting
- **Validation** - Express-validator for input validation
- **Development Tools** - Nodemon, ESLint, Prettier

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add:

```env
# Database
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/biztrack?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# CORS
FRONTEND_URL=http://localhost:5173
```

### 3. MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Get your connection string and replace `MONGODB_URI` in `.env`

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `GET /api/auth/logout` - Logout user

### Health Check

- `GET /` - API status
- `GET /api/health` - Health check endpoint

## Project Structure

```
backend/
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # Database models
├── routes/            # API routes
├── utils/             # Utility functions
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── server.js          # Main server file
└── package.json       # Dependencies and scripts
```

## Installed Packages

### Production Dependencies

- `express` - Web framework
- `mongoose` - MongoDB object modeling
- `dotenv` - Environment variable loader
- `cors` - Cross-origin resource sharing
- `helmet` - Security middleware
- `morgan` - HTTP request logger
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT implementation
- `express-validator` - Input validation
- `express-rate-limit` - Rate limiting
- `compression` - Response compression

### Development Dependencies

- `nodemon` - Auto-restart server
- `concurrently` - Run multiple commands
- `eslint` - Code linting
- `prettier` - Code formatting
- `eslint-config-prettier` - Prettier ESLint config
- `eslint-plugin-node` - Node.js ESLint plugin

## Security Features

- Rate limiting (100 requests per 15 minutes)
- Helmet.js security headers
- CORS protection
- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization

## Next Steps

1. Update the MongoDB connection string in `.env`
2. Create additional models in the `models/` folder
3. Add more routes in the `routes/` folder
4. Add corresponding controllers in the `controllers/` folder
5. Test the API endpoints with Postman or similar tool
