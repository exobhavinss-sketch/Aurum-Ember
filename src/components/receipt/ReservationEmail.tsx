import React from 'react';
import { SITE } from '@/lib/constants';

interface ReservationEmailProps {
  reservation: any;
  qrCodeUrl?: string;
}

export default function ReservationEmail({ reservation, qrCodeUrl }: ReservationEmailProps) {
  const fontBody = "Arial, Helvetica, sans-serif";
  const fontDisplay = "'Times New Roman', Times, serif";

  return (
    <div style={{ backgroundColor: '#0A0A0F', padding: '40px 20px', fontFamily: fontBody, color: '#EDE7E0', width: '100%' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#141418', border: '1px solid #C49A2A', borderRadius: '8px', overflow: 'hidden' }}>
        <tbody>
          <tr>
            <td style={{ padding: '40px', textAlign: 'center', borderBottom: '1px solid rgba(196, 154, 42, 0.2)' }}>
              <h1 style={{ fontFamily: fontDisplay, fontSize: '32px', margin: '0 0 8px 0', color: '#EDE7E0' }}>Aurum & Ember</h1>
              <p style={{ margin: 0, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#D4AF37' }}>Fire · Time · Devotion</p>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '40px' }}>
              <h2 style={{ fontFamily: fontDisplay, fontSize: '24px', margin: '0 0 30px 0', textAlign: 'center', color: '#EDE7E0' }}>Reservation Confirmed</h2>
              
              <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ marginBottom: '30px' }}>
                <tbody>
                  <tr>
                    <td width="50%" style={{ paddingBottom: '20px' }}>
                      <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Confirmation No.</p>
                      <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.confirmation}</p>
                    </td>
                    <td width="50%" style={{ paddingBottom: '20px' }}>
                      <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Date Submitted</p>
                      <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.dateSubmitted}</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Guest Name</p>
                      <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.firstName} {reservation.lastName}</p>
                    </td>
                    <td width="50%">
                      <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Contact Info</p>
                      <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.email}</p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#8A837D' }}>{reservation.phone}</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: '#1C1C22', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '24px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                        <tbody>
                          <tr>
                            <td width="50%" style={{ paddingBottom: '20px' }}>
                              <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Date</p>
                              <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.date}</p>
                            </td>
                            <td width="50%" style={{ paddingBottom: '20px' }}>
                              <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Time</p>
                              <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.time}</p>
                            </td>
                          </tr>
                          <tr>
                            <td width="50%">
                              <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Party Size</p>
                              <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.guests} Guest(s)</p>
                            </td>
                            <td width="50%">
                              <p style={{ margin: '0 0 4px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Experience</p>
                              <p style={{ margin: 0, fontFamily: fontDisplay, fontSize: '18px', color: '#EDE7E0' }}>{reservation.experience.replace('-', ' ').toUpperCase()}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {reservation.requests && (
                <div style={{ marginTop: '30px' }}>
                  <p style={{ margin: '0 0 8px 0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Special Requests</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#B8AFA6', fontStyle: 'italic', lineHeight: '1.6' }}>"{reservation.requests}"</p>
                </div>
              )}

              {qrCodeUrl && (
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                  <img src={qrCodeUrl} alt="Reservation QR Code" width="100" height="100" style={{ margin: '0 auto 12px auto', display: 'block', border: '4px solid #fff', borderRadius: '4px' }} />
                  <p style={{ margin: 0, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8A837D' }}>Scan to Verify</p>
                </div>
              )}

            </td>
          </tr>
          <tr>
            <td style={{ padding: '30px', textAlign: 'center', backgroundColor: '#0A0A0F', borderTop: '1px solid rgba(196, 154, 42, 0.2)' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#8A837D' }}>142 West 24th Street, New York, NY 10011</p>
              <p style={{ margin: '0 0 20px 0', fontSize: '12px', color: '#8A837D' }}>+1 (212) 555-0187</p>
              <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#B8AFA6' }}>Cancellation Policy</p>
              <p style={{ margin: 0, fontSize: '11px', color: '#8A837D', lineHeight: '1.5' }}>
                We ask that any cancellation to your reservation be made no less than 48 hours prior. 
                For no-shows or late cancellations, you will be subject to a fee of $50 per person that will be applied to the credit card on file.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
