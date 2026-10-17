# Lokarakshaka Hospital website starter

Responsive React + TypeScript frontend, Express + TypeScript API starter, and PostgreSQL/Prisma schema, based on the five supplied design-reference screenshots.

## Features included
- Home, About, Doctors, Facilities, and Contact routes
- Purple visual theme, responsive layout, slide-out mobile navigation
- Top-right Malayalam-letter language switcher (`മ`) with English/Malayalam interface copy
- Department-wise doctor placeholders and facility image placeholders
- News & Events placeholder on the home page (not a separate page)
- OPD 9 AM–1 PM and 24-hour emergency information
- Starter Express API with health, departments, and validated enquiry endpoints
- Prisma schema for departments, doctors, enquiries, and news/events

## Requirements
- Node.js 20 or later
- npm
- PostgreSQL only when you are ready to connect the database

## Run frontend
```bash
cd frontend
npm install
npm run dev
```
Vite prints a local URL, usually http://localhost:5173.

## Run backend
In a second terminal:
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
The API runs on http://localhost:4000. Test `GET /api/health` and `GET /api/departments`.

## Database setup (when ready)
1. Create a PostgreSQL database named `lokarakshaka`.
2. Set `DATABASE_URL` in `backend/.env`.
3. Run `npm run db:generate` and `npm run db:migrate` from `backend`.

## Important before production
- The contact form is currently a frontend demo and does not send messages. Connect it to `POST /api/enquiries`, add database persistence and secure email delivery.
- Add authentication/authorisation before building any admin dashboard.
- Add rate limiting, request logging that excludes personal data, spam protection, HTTPS, backups and server-side validation.
- Replace facility/doctor placeholders with hospital-approved photos and verified details. Check every clinical, contact, and operational detail before publication.
- The homepage uses remote Unsplash stock imagery as a temporary visual. Replace it with licensed hospital-approved images.
- This starter is code only; it does not configure hosting or a domain.
