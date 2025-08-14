# Unfold Finleg Solutions - Backend Server

Backend API for Unfold Finleg Solutions - Governance and Compliance Consulting Platform.

## Features

- **Authentication & Authorization**: JWT-based authentication system
- **Admin Management**: Admin user registration and login
- **Team Management**: Team member CRUD operations
- **Blog Management**: Blog post creation and management
- **Service Management**: Service offerings management
- **Contact Management**: Contact form submissions handling
- **Email Integration**: SMTP email functionality
- **Security**: Helmet, CORS, rate limiting, input validation
- **Logging**: Winston-based logging system
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Email**: Nodemailer
- **Logging**: Winston
- **Security**: Helmet, CORS, express-rate-limit
- **Validation**: express-validator
- **Development**: ts-node-dev, ESLint, Prettier

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration values.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

See `.env.example` for all required environment variables.

Key variables:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `SMTP_*`: Email configuration
- `ADMIN_EMAIL`: Admin email address

## API Endpoints

- **Authentication**: `/api/v1/admin/*`
- **Team**: `/api/v1/team/*`
- **Blog**: `/api/v1/blog/*`
- **Services**: `/api/v1/services/*`
- **Contact**: `/api/v1/contact/*`
- **Health Check**: `/api/v1/health`
- **Documentation**: `/api/v1/docs`

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Configure all required environment variables
3. Ensure MongoDB is accessible
4. Run `npm run build` and `npm start`

## License

ISC
