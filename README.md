
---

## ✨ Features

### Frontend
- **Multi-page SPA** with React Router — Home, About, Services, Blog, Contact, Legal
- **Services Hierarchy** — 3-level nested routing (overview → category → detail)
- **Blog System** — Static blog listing with individual post pages
- **Contact Form** — Validated with React Hook Form + Zod, submits to backend API
- **Animations** — Framer Motion page transitions and component animations
- **Fully Responsive** — Mobile-first design with Tailwind CSS
- **Dark/Light Mode Ready** — `next-themes` integration
- **Accessible Components** — Built on Radix UI primitives via shadcn/ui
- **Scroll Restoration** — Automatically scrolls to top on every route change
- **Toast Notifications** — Sonner for success/error feedback on form submit
- **Legal Pages** — Privacy Policy, Terms of Service, Cookie Policy

### Backend
- **Contact Form Email Delivery** — Sends formatted HTML email to admin on form submission
- **Zoho SMTP Integration** — Secure email via port 465 with TLS
- **Rate Limiting** — 100 req/15 min general limiter; strict 3 req/hour on `/contact`
- **Security Hardening** — Helmet CSP, X-Frame-Options, X-XSS-Protection headers
- **Structured Logging** — Winston logger with file rotation + Morgan HTTP logs
- **Graceful Shutdown** — SIGTERM/SIGINT handlers with 10-second force-exit fallback
- **Health Check Endpoint** — Returns uptime, memory usage, environment info
- **API Documentation Endpoint** — Self-documenting `/api/v1/docs` route
- **Error Handling** — Global error middleware + unhandledRejection/uncaughtException handlers
- **Response Compression** — gzip compression via `compression` middleware
- **CORS** — Whitelisted origins for local dev and production domains

---

## 📡 API Reference

Base URL: `https://your-render-url.onrender.com`

### General

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1` | Welcome message + status |
| `GET` | `/api/v1/health` | Server health, uptime, memory |
| `GET` | `/api/v1/docs` | API documentation |

### Contact

| Method | Endpoint | Auth | Rate Limit | Description |
|--------|----------|------|------------|-------------|
| `POST` | `/api/v1/contact/submit` | None | 3 req/hour | Submit contact form |
| `GET` | `/api/v1/contact/health` | None | General | Contact service status |

#### `POST /api/v1/contact/submit`

**Request Body:**
```json
{
  "name": "John Doe",           // required
  "email": "john@example.com",  // required
  "phone": "+91 9876543210",    // required
  "message": "Hello...",        // required
  "company": "Acme Corp",       // optional
  "service": "Compliance",      // optional
  "serviceSubcategory": "FEMA"  // optional
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (400 — Missing Fields):**
```json
{
  "success": false,
  "error": {
    "message": "Missing required fields",
    "code": 400
  }
}
```

**Error Response (429 — Rate Limited):**
```json
{
  "success": false,
  "error": {
    "message": "Too many contact form submissions, try again later.",
    "code": 429
  }
}
```

---

## 🔐 Environment Variables

### Backend (`server/.env`)

```env
# Server
NODE_ENV=development
PORT=5000

# Database (optional — not required for current features)
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/unfold

# JWT (configured for future admin panel)
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# Zoho SMTP Email
SMTP_HOST=smtp.zoho.in
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=aryan@unfoldfinlegsolutions.com
SMTP_PASS=your_zoho_app_password
SMTP_FROM="Unfold Finleg Solutions" <aryan@unfoldfinlegsolutions.com>
ADMIN_EMAIL=aryan@unfoldfinlegsolutions.com

# CORS (comma-separated for multiple origins on Render)
CORS_ORIGIN=https://unfoldfinlegsolutions.com,https://your-vercel-url.vercel.app

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100

# Logging
LOG_LEVEL=info
LOG_DIR=./logs
```

> ⚠️ **Important:** In production, `JWT_SECRET`, `MONGODB_URI`, `SMTP_USER`, `SMTP_PASS`, and `ADMIN_EMAIL` are **required** — the server will exit with code 1 if any are missing.

### Frontend (`user/.env`)

```env
# Backend API URL
VITE_API_BASE_URL=https://your-render-backend.onrender.com
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ (recommended: v20 LTS)
- **npm** v9+
- A **Zoho Mail** account (or any SMTP provider)

---

### Frontend Setup

```bash
# 1. Navigate to frontend directory
cd user

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
# Set VITE_API_BASE_URL to your backend URL

# 4. Start development server
npm run dev
# Runs on http://localhost:5173
```

---

### Backend Setup

```bash
# 1. Navigate to backend directory
cd server

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
# Fill in all required variables (see Environment Variables section)

# 4. Start development server (with hot reload)
npm run dev
# Runs on http://localhost:5000

# 5. Verify it's running
curl http://localhost:5000/api/v1/health
```

---

## 📜 Scripts

### Frontend (`/user`)

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript compile + Vite production build
npm run preview    # Preview production build locally
npm run clean      # Remove node_modules/.vite and dist
```

### Backend (`/server`)

```bash
npm run dev        # ts-node-dev with hot reload (--respawn --transpile-only)
npm run build      # Compile TypeScript → dist/
npm run start      # Run compiled JS (node dist/index.js) — used in production
npm run lint       # ESLint check on .ts files
```

---

## 🗺 Pages & Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.tsx` | Hero, services overview, call-to-action |
| `/about` | `About.tsx` | Company info, team, mission |
| `/services` | `Services/1_Services.tsx` | All service categories |
| `/services/:categorySlug` | `Services/2_ServiceCategory.tsx` | Category-level services |
| `/services/:categorySlug/:serviceSlug` | `Services/3_ServiceDetail.tsx` | Individual service detail |
| `/blog` | `Blogs/1_BlogList.tsx` | All blog posts |
| `/blog/:slug` | `Blogs/2_BlogDetail.tsx` | Single blog post |
| `/contact` | `Contact.tsx` | Contact form + company details |
| `/privacy` | `Legal/x_PrivacyPolicy.tsx` | Privacy Policy |
| `/terms` | `Legal/x_TermsOfService.tsx` | Terms of Service |
| `/cookies` | `Legal/x_CookiePolicy.tsx` | Cookie Policy |
| `*` | `NotFound.tsx` | 404 fallback |

> All routes are wrapped in a persistent `<Navbar />` and `<Footer />` layout. `<ScrollToTop />` ensures the page scrolls to the top on every route transition.

---

## ⚙️ Backend Architecture

### Middleware Stack (in order)
Request
│ ├── helmet() → Security headers (CSP, X-Frame-Options, etc.)
├── compression() → gzip response compression
├── morgan() → HTTP access logging (combined/dev)
├── cors() → Whitelist: localhost + unfoldfinlegsolutions.com
├── generalLimiter → 100 req / 15 min per IP on /api/*
├── contactLimiter → 3 req / 15 min per IP on /api/v1/contact
├── express.json() → JSON body parsing (max 10mb)
├── express.urlencoded() → URL-encoded body parsing (max 10mb)
├── Custom Headers → nosniff, DENY framing, XSS protection
│ └── Routes
├── GET /api/v1 → Welcome
├── GET /api/v1/health → Health check
├── GET /api/v1/docs → API docs
└── /api/v1/contact → contactRoutes
└── POST /submit → submitContactForm controller


### Contact Form Flow
Client POST /api/v1/contact/submit
│ ├── Rate limiter check (3 req/hr)
├── Body parsed by express.json()
│ └── submitContactForm()
├── Validate required fields (name, email, phone, message)
├── Call sendContactEmail()
│ ├── Create Nodemailer transporter (Zoho SMTP, port 465)
│ ├── Build HTML email template
│ └── Send to ADMIN_EMAIL with replyTo set to visitor's email
└── Return 200 { success: true }


### Logger

Winston is configured with structured log levels (`info`, `warn`, `error`) and outputs to both console and rotating log files under `./logs/`. Morgan streams HTTP logs through Winston's HTTP log stream.

---

## 🔒 Security Features

| Feature | Implementation |
|---------|---------------|
| Security Headers | Helmet with full CSP, X-Frame: DENY, X-XSS-Protection |
| Rate Limiting | express-rate-limit (general + strict contact limiter) |
| CORS Whitelisting | Only specific origins allowed, credentials: true |
| Input Parsing Limit | JSON and URL-encoded body max 10MB |
| Trust Proxy | Enabled for accurate IP detection behind Render/Nginx |
| Error Sanitization | Global error handler strips stack traces in production |
| Graceful Shutdown | SIGTERM/SIGINT handling with 10s forced-exit fallback |

---

## 🌍 Deployment

### Frontend → Vercel

```bash
# From /user directory
npm run build   # Generates /dist

# vercel.json handles SPA routing (rewrites /* → /index.html)
```

**Vercel Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: `user`
- Add `VITE_API_BASE_URL` in Vercel Environment Variables

---

### Backend → Render

**Render Settings:**
- Environment: Node
- Root Directory: `server`
- Build Command: `npm install && npm run build`
- Start Command: `npm run start` (runs `node dist/index.js`)
- Add all required env variables from the [Environment Variables](#-environment-variables) section in Render dashboard

> ⚠️ Set `CORS_ORIGIN` on Render to your Vercel deployment URL to allow cross-origin requests.

---

## 🤝 Contributing

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make changes, then commit
git commit -m "feat: add your feature description"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

**Code Style:**
- Backend: ESLint + Prettier (TypeScript strict mode)
- Frontend: ESLint with react-hooks and react-refresh plugins
- Follow existing naming conventions (PascalCase components, camelCase utils)

---

<div align="center">

Built with ❤️ by [Vansh Sharma](https://github.com/Vansh1811)

</div>
