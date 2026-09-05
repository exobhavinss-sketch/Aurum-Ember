"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Calendar, Clock, Users, Download, Printer, Mail, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Tag, Divider, Input, TextArea, Select } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { pdf } from "@react-pdf/renderer";
import ReservationPDF from "@/components/receipt/ReservationPDF";
import ReservationEmail from "@/components/receipt/ReservationEmail";
import { generateReservationQR } from "@/lib/generateQR";

const timeSlots = [
  { value: "", label: "Select a time" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "19:30", label: "7:30 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "20:30", label: "8:30 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "21:30", label: "9:30 PM" },
];

const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6 Guests" },
  { value: "7", label: "7+ Guests — Private Dining" },
];

const diningOptions = [
  { value: "dining-room", label: "The Dining Room" },
  { value: "chefs-counter", label: "The Chef's Counter" },
  { value: "private-cellar", label: "The Private Cellar" },
  { value: "bar", label: "The Bar" },
  { value: "no-preference", label: "No Preference" },
];

export default function ReservationsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationData, setReservationData] = useState<any>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create reservation');
      }

      const result = await response.json();
      const resData = result.reservation;
      
      const qr = await generateReservationQR(resData.verificationToken);
      setQrCodeUrl(qr);
      
      setReservationData({
        ...resData,
        // Map DB keys back to what the frontend / PDF expects (or I can map it here for compatibility)
        confirmation: resData.reservationId,
        dateSubmitted: new Date(resData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        firstName: resData.customerName.split(' ')[0] || '',
        lastName: resData.customerName.split(' ').slice(1).join(' ') || '',
        email: resData.email,
        phone: resData.phone,
        date: resData.reservationDate,
        time: resData.reservationTime,
        guests: resData.partySize,
        experience: resData.tablePreference,
        requests: resData.specialRequests,
        invoiceId: resData.invoiceId,
        status: resData.status,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('There was an error processing your reservation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generatePDFBlob = async () => {
    const doc = <ReservationPDF reservation={reservationData} qrCodeUrl={qrCodeUrl} />;
    const asPdf = pdf(doc);
    return await asPdf.toBlob();
  };

  const handleDownloadPDF = async () => {
    const blob = await generatePDFBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AurumEmber_Reservation_${reservationData.confirmation}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintPDF = async () => {
    const blob = await generatePDFBlob();
    const url = URL.createObjectURL(blob);
    
    // Create a hidden iframe to print the PDF
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);
    
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.print();
      }, 100);
    };
  };

  return (
    <div className="pt-[var(--section-gap)] pb-[var(--section-gap)]">
      {/* Header */}
      {!isSubmitted && (
        <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)] text-center mb-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerItem}><Tag className="mb-6 block">Reservations</Tag></motion.div>
            <motion.h1 variants={staggerItem} className="font-display text-cream leading-tight" style={{ fontSize: "var(--text-h1)" }}>
              Reserve Your <span className="text-gradient-gold italic">Evening</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-6 text-lg text-sand/80 max-w-xl mx-auto">
              We look forward to welcoming you. Please complete the form below and our team will confirm your reservation within 24 hours.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-10"><Divider ornamental /></motion.div>
          </motion.div>
        </div>
      )}

      <div className="max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]">
        {!isSubmitted ? (
          /* Form */
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Input label="First Name" type="text" id="firstName" name="firstName" required />
              <Input label="Last Name" type="text" id="lastName" name="lastName" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Input label="Email Address" type="email" id="email" name="email" required />
              <Input label="Phone Number" type="tel" id="phone" name="phone" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <label htmlFor="date" className="block text-xs text-sand mb-2 font-accent tracking-wide">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-graphite border-2 border-white/10 rounded-lg py-3 px-4 text-cream focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
              </div>
              <Select label="Preferred Time" options={timeSlots} id="time" name="time" />
              <Select label="Number of Guests" options={guestOptions} id="guests" name="guests" />
            </div>

            <div className="mb-8">
              <Select label="Dining Experience" options={diningOptions} id="experience" name="experience" />
            </div>

            <div className="mb-10">
              <TextArea
                label="Special Requests or Dietary Requirements"
                id="requests"
                name="requests"
                rows={4}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone max-w-md">
                By submitting this form you agree to be contacted regarding your reservation.
                For parties of 7 or more, please{" "}
                <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">
                  contact us directly
                </Link>.
              </p>
              <Button variant="primary" size="lg" type="submit" disabled={isGenerating}>
                {isGenerating ? "Processing..." : "Request Reservation"}
              </Button>
            </div>
          </motion.form>
        ) : (
          /* Confirmation Dashboard */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl text-cream mb-4">Reservation Requested</h2>
            <p className="text-sand/80 text-lg max-w-lg mx-auto mb-10">
              Thank you, {reservationData.firstName}. Your request (No. {reservationData.confirmation}) has been received. 
              Our concierge team will be in touch shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="primary" onClick={handleDownloadPDF} className="gap-2 w-full sm:w-auto">
                <Download size={18} />
                Download PDF
              </Button>
              <Button variant="secondary" onClick={handlePrintPDF} className="gap-2 w-full sm:w-auto">
                <Printer size={18} />
                Print Receipt
              </Button>
              <Button variant="ghost" onClick={() => setShowEmailPreview(!showEmailPreview)} className="gap-2 w-full sm:w-auto">
                <Mail size={18} />
                {showEmailPreview ? "Hide Email Preview" : "Preview Email"}
              </Button>
            </div>

            {/* Email Preview Section */}
            {showEmailPreview && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-12 text-left"
              >
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="font-accent text-sm tracking-widest text-gold uppercase">HTML Email Preview</h3>
                </div>
                <div className="rounded-xl overflow-hidden shadow-glow-md">
                  <ReservationEmail reservation={reservationData} qrCodeUrl={qrCodeUrl} />
                </div>
              </motion.div>
            )}

            {!showEmailPreview && (
              <div className="text-center mt-12">
                 <Button variant="ghost" onClick={() => setIsSubmitted(false)}>Make Another Reservation</Button>
              </div>
            )}
          </motion.div>
        )}

        {/* Info */}
        {!isSubmitted && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div variants={staggerItem} className="text-center">
              <Calendar className="w-6 h-6 text-gold mx-auto mb-3" />
              <h3 className="font-display text-cream text-lg mb-2">Hours</h3>
              <p className="text-sm text-sand/70">{SITE.hours.dining}</p>
              <p className="text-sm text-sand/50 mt-1">Closed {SITE.hours.closed}</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <Users className="w-6 h-6 text-gold mx-auto mb-3" />
              <h3 className="font-display text-cream text-lg mb-2">Private Events</h3>
              <p className="text-sm text-sand/70">For parties of 7+, our Private Cellar offers an exclusive experience.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <Clock className="w-6 h-6 text-gold mx-auto mb-3" />
              <h3 className="font-display text-cream text-lg mb-2">Confirmation</h3>
              <p className="text-sm text-sand/70">Reservations are confirmed within 24 hours via email.</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
