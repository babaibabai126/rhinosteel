import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Lazily created Prisma client.
// - Never instantiated at module scope so a missing DATABASE_URL or an
//   unsupported runtime (e.g. Vercel serverless) can never break the build.
// - On Vercel the SQLite file cannot persist; enquiries are delivered to the
//   business via WhatsApp from the client, this API is a best-effort store.
let prisma: PrismaClient | null = null;

function getPrisma(): PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient({ log: ['error'] });
  }
  return prisma;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, product, message } = body ?? {};

    // Server-side validation
    if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid name.' },
        { status: 400 }
      );
    }

    const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;
    if (typeof phone !== 'string' || !phoneRegex.test(phone.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid mobile number.' },
        { status: 400 }
      );
    }

    if (email && (typeof email !== 'string' || email.length > 120)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (typeof product !== 'string' || product.trim().length < 1 || product.trim().length > 150) {
      return NextResponse.json(
        { success: false, error: 'Please select a product you are interested in.' },
        { status: 400 }
      );
    }

    if (message && (typeof message !== 'string' || message.length > 1000)) {
      return NextResponse.json(
        { success: false, error: 'Message is too long (max 1000 characters).' },
        { status: 400 }
      );
    }

    // Best-effort storage. WhatsApp (opened client-side) is the primary
    // delivery channel, so a storage failure must never fail the request —
    // e.g. on Vercel serverless where SQLite cannot persist.
    let stored: string | null = null;
    try {
      const enquiry = await getPrisma().enquiry.create({
        data: {
          name: name.trim(),
          phone: phone.trim(),
          email: typeof email === 'string' && email.trim() ? email.trim() : null,
          product: product.trim(),
          message: typeof message === 'string' && message.trim() ? message.trim() : null,
        },
      });
      stored = enquiry.id;
    } catch (error) {
      console.warn('Enquiry storage skipped (non-persistent environment):', error instanceof Error ? error.message : error);
    }

    return NextResponse.json({ success: true, id: stored, stored: stored !== null }, { status: 201 });
  } catch (error) {
    console.error('Failed to process enquiry:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          'Enquiry could not be processed, but it can still be delivered via WhatsApp.',
      },
      { status: 500 }
    );
  }
}
