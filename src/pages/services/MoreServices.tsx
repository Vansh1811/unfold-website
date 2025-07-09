// src/pages/services/MoreServices.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const extraServices = [
  'Limited Liability Partnership (LLP)',
  'One Person Company',
  'Public Limited Company',
  'Nidhi Company',
  'Section‑8 Company',
  'Private Limited Company',
  'GST & Income Tax',
  'FSSAI Registration',
  'EPFO & ESIC Registration/Returns',
];

export default function MoreServices() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold mb-6">More Services</h1>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        {extraServices.map((svc) => (
          <li key={svc}>{svc}</li>
        ))}
      </ul>
      <Link
        to="/services"
        className="text-blue-600 hover:underline font-medium"
      >
        ← Back to All Services
      </Link>
    </div>
  );
}
