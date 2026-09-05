import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { CheckCircle2, XCircle, Calendar, Clock, Users, Hash } from 'lucide-react';
import { Tag } from '@/components/ui';

export default async function VerifyPage({ params }: { params: { token: string } }) {
  const { token } = params;

  if (!token) {
    notFound();
  }

  const reservation = await prisma.reservation.findUnique({
    where: { verificationToken: token },
  });

  if (!reservation) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-[var(--section-gap)] pb-[var(--section-gap)]">
        <div className="max-w-md mx-auto px-6 text-center">
          <XCircle className="w-16 h-16 text-error mx-auto mb-6" />
          <h1 className="font-display text-4xl text-cream mb-4">Verification Failed</h1>
          <p className="text-sand/80 text-lg">
            This reservation could not be found or the verification link is invalid. 
            Please contact the restaurant for assistance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      <div className="max-w-3xl mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-12">
          <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-6" />
          <Tag className="mb-4 inline-block bg-success/20 text-success border border-success/30 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs">
            Verified Authentic
          </Tag>
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">Official Confirmation</h1>
          <p className="text-sand/80 text-lg">This document proves a secured reservation at Aurum & Ember.</p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-10 border-b border-white/10 gap-6">
            <div>
              <div className="font-accent text-xs tracking-widest text-taupe uppercase mb-1">Reservation No.</div>
              <div className="font-display text-2xl text-cream flex items-center gap-2">
                <Hash className="w-5 h-5 text-gold" />
                {reservation.reservationId}
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="font-accent text-xs tracking-widest text-taupe uppercase mb-1">Guest</div>
              <div className="font-display text-xl text-cream">{reservation.customerName}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl text-center">
              <Calendar className="w-6 h-6 text-gold mb-3" />
              <div className="font-accent text-xs tracking-widest text-taupe uppercase mb-1">Date</div>
              <div className="text-cream font-medium">{reservation.reservationDate}</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl text-center">
              <Clock className="w-6 h-6 text-gold mb-3" />
              <div className="font-accent text-xs tracking-widest text-taupe uppercase mb-1">Time</div>
              <div className="text-cream font-medium">{reservation.reservationTime}</div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl text-center">
              <Users className="w-6 h-6 text-gold mb-3" />
              <div className="font-accent text-xs tracking-widest text-taupe uppercase mb-1">Party Size</div>
              <div className="text-cream font-medium">{reservation.partySize} Guests</div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-xs text-stone mb-2">Issued: {reservation.createdAt.toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)</p>
            <p className="text-xs text-stone">This is a secure, verifiable record from the Aurum & Ember system.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
