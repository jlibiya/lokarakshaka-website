import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { z } from 'zod';

const app = express();
const port = Number(process.env.PORT ?? 4000);
app.use(cors({ origin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173' }));
app.use(express.json({ limit: '20kb' }));

const departments = ['Urology','Pulmonology','Nephrology','Neurology','Gastroenterology','Orthopedics','ENT','Dermatology','Gynaecology','General Surgery','General Medicine','Dentistry','Pediatrics'];
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Lokarakshaka Hospital API' }));
app.get('/api/departments', (_req, res) => res.json(departments));

// Demo validation endpoint. Add email delivery/database persistence before production use.
const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  message: z.string().trim().min(5).max(3000)
});
app.post('/api/enquiries', (req, res) => {
  const parsed = enquirySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Please check the form fields.', details: parsed.error.flatten() });
  // TODO: Store securely in PostgreSQL and notify authorised hospital staff.
  // Do not log patient details or add medical information to analytics.
  return res.status(202).json({ message: 'Enquiry validated. Persistence and email delivery are not configured yet.' });
});
app.use((_req, res) => res.status(404).json({ error: 'Endpoint not found' }));
app.listen(port, () => console.log(`Lokarakshaka API listening on port ${port}`));
