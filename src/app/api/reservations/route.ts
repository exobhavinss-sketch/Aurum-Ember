import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Generate Unique IDs
    const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
    const reservationId = `RES-${new Date().getFullYear()}-${randomSuffix}`;
    const invoiceId = `INV-${new Date().getFullYear()}-${randomSuffix}`;
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const newReservation = await prisma.reservation.create({
      data: {
        reservationId,
        invoiceId,
        customerName: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        phone: data.phone,
        reservationDate: data.date,
        reservationTime: data.time,
        partySize: parseInt(data.guests, 10),
        specialRequests: data.requests,
        tablePreference: data.experience,
        verificationToken,
      },
    });

    return NextResponse.json({ success: true, reservation: newReservation }, { status: 201 });
  } catch (error) {
    console.error('Failed to create reservation:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
