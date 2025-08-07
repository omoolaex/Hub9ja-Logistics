import nodemailer from 'nodemailer';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { formType, ...formData } = body;
    const timestamp = new Date().toISOString();

    const SHEETDB_BASE = process.env.SHEETDB_API_URL;

    const SHEET_MAP = {
      individual: 'individual',
      business: 'business',
      contact: 'contact',
    };

    const FIELD_MAP = {
      individual: {
        Timestamp: timestamp,
        'Full Name': formData.fullName || '',
        'Email Address': formData.email || '',
        Phone: formData.phone || '',
        'Pickup Location': formData.pickupLocation || '',
        'Drop-off Location': formData.dropoffLocation || '',
        'Preferred Delivery Date': formData.deliveryDate || '',
        'Package Description': formData.packageDescription || '',
      },
      business: {
      Timestamp: timestamp,
      'Full Name': formData.fullName || '',
      'Email Address': formData.email || '',
      'Phone Number': formData.phone || '',
      'Business Name': formData.businessName || '',
      'Business Address': formData.address || '',
      'Type of Business': formData.businessType || '',
      'Pickup Frequency': formData.pickupFrequency || '',
      'Estimated Monthly Delivery Volume': formData.estimatedVolume || '',
      'Additional Notes': formData.notes || '',
      },
      contact: {
        Timestamp: timestamp,
        'Full Name': formData.name || '',
        'Email Address': formData.email || '',
        'Phone Number': formData.phone || '',
        Message: formData.message || '',
      },
    };

    const sheetName = SHEET_MAP[formType];
    const mappedData = FIELD_MAP[formType];

    if (!sheetName || !mappedData) {
      return NextResponse.json(
        { success: false, error: `Invalid formType: ${formType}` },
        { status: 400 }
      );
    }

    // ✅ Log to Google Sheet
    await axios.post(`${SHEETDB_BASE}?sheet=${sheetName}`, {
      data: mappedData,
    });

    // ✅ Send Email Notification
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Markethub9ja Forms" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      cc: process.env.CC_EMAIL || undefined,
      bcc: process.env.BCC_EMAIL || undefined,
      subject: `New ${capitalize(formType)} Submission - ${formData.fullName || 'Unnamed'}`,
      html: generateEmailHtml(formType, mappedData),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Form Handler Error:', error.message);
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// ✅ Format HTML Email
function generateEmailHtml(type, data) {
  return `
    <h2>New ${type.toUpperCase()} Submission</h2>
    <ul>
      ${Object.entries(data)
        .map(([key, value]) => `<li><strong>${key}</strong>: ${value}</li>`)
        .join('')}
    </ul>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
