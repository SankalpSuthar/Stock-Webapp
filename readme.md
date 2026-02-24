# Stock WebApp

Live deployment: https://stock-webapp.onrender.com

## Overview
Stock WebApp is a full-stack Zerodha-style clone built with:
- React (landing app in `frontend`)
- React (trading dashboard in `dashboard`)
- Node.js + Express + MongoDB (API in `backend`)

The Render deployment serves the frontend through the backend service.

## Repository Structure
- `backend/` - Express API, MongoDB models, production static serving
- `frontend/` - Main React landing web app
- `dashboard/` - Trading dashboard React app

## Tech Stack
- Frontend: React, React Router, Bootstrap
- Dashboard: React, MUI, Axios, Chart.js
- Backend: Express, Mongoose, CORS, dotenv
- Database: MongoDB Atlas
- Deployment: Render

## Environment Variables
Set the following in `backend/.env` for local use and in Render for production:

- `MONGO_URL=<your_mongodb_connection_string>`

Example:
`MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/zerodha_clone?retryWrites=true&w=majority`

## Local Development

### 1) Backend
```bash
cd backend
npm install
npm start
```
Runs API on `http://localhost:3002` (or `PORT` if set).

### 2) Frontend (landing)
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`.

### 3) Dashboard (optional separate app)
```bash
cd dashboard
npm install
npm start
```
Runs on `http://localhost:3001` (or next available port).

## Production Build

### Frontend build
```bash
cd frontend
npm run build
```

### Backend production build pipeline
```bash
cd backend
npm run build
npm start
```
`backend` build script compiles the `frontend` app and backend serves `frontend/build`.

## Render Deployment
This repo includes `render.yaml` for blueprint deployment.

Backend service settings:
- Root Directory: `backend`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Environment Variable: `MONGO_URL`

If deployment changes do not reflect:
1. Trigger `Manual Deploy`.
2. Choose `Clear build cache & deploy`.

## API Endpoints
- `GET /allHoldings`
- `GET /allPositions`
- `POST /newOrder`

## Notes
- If MongoDB is not reachable, backend still starts but data routes may fail.
- For MongoDB Atlas, allow access from Render by adding `0.0.0.0/0` in Atlas Network Access.
