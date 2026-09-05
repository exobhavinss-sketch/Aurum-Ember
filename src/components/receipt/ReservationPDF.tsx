import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FAFAF9',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#D4AF37',
    paddingBottom: 16,
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  brandName: {
    fontFamily: 'Times-Roman',
    fontSize: 24,
    color: '#1C1C22',
  },
  brandSub: {
    fontSize: 8,
    color: '#8A837D',
    letterSpacing: 2,
    marginTop: 2,
    textTransform: 'uppercase',
  },
  receiptTitle: {
    fontFamily: 'Times-Roman',
    fontSize: 20,
    color: '#1C1C22',
    textAlign: 'center',
    marginBottom: 4,
  },
  statusBadge: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 8,
    color: '#2E7D32',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  col: {
    width: '45%',
  },
  label: {
    fontSize: 8,
    color: '#8A837D',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  valueDisplay: {
    fontFamily: 'Times-Roman',
    fontSize: 14,
    color: '#1C1C22',
  },
  valueText: {
    fontSize: 9,
    color: '#3A3A44',
    marginTop: 2,
    lineHeight: 1.4,
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE9',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  qrSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  qrCode: {
    width: 70,
    height: 70,
    marginBottom: 6,
  },
  qrText: {
    fontSize: 8,
    color: '#8A837D',
    letterSpacing: 1,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFECE9',
    marginVertical: 10,
  },
  policy: {
    fontSize: 8,
    color: '#6B6560',
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EFECE9',
    paddingTop: 12,
  },
  footerText: {
    fontSize: 8,
    color: '#8A837D',
    marginBottom: 2,
  },
  requestsContainer: {
    maxHeight: 50, // Enforce strict height limit for requests to prevent page overflow
    overflow: 'hidden',
  }
});

interface ReservationPDFProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reservation: any;
  qrCodeUrl: string;
}

export default function ReservationPDF({ reservation, qrCodeUrl }: ReservationPDFProps) {
  return (
    <Document>
      {/* wrap={false} enforces strict single-page rendering. Elements will truncate instead of breaking to a new page */}
      <Page size="LETTER" style={styles.page} wrap={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.brandName}>Aurum & Ember</Text>
            <Text style={styles.brandSub}>Fire · Time · Devotion</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.valueText}>142 West 24th Street</Text>
            <Text style={styles.valueText}>New York, NY 10011</Text>
            <Text style={styles.valueText}>+1 (212) 555-0187</Text>
          </View>
        </View>

        <Text style={styles.receiptTitle}>Reservation Confirmation</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{reservation.status || 'CONFIRMED'}</Text>
        </View>

        {/* Primary Info */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Reservation No.</Text>
            <Text style={styles.valueDisplay}>{reservation.confirmation}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Invoice No.</Text>
            <Text style={styles.valueDisplay}>{reservation.invoiceId || reservation.confirmation.replace('RES', 'INV')}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Guest Name</Text>
            <Text style={styles.valueDisplay}>{reservation.firstName} {reservation.lastName}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Contact Info</Text>
            <Text style={styles.valueDisplay}>{reservation.email}</Text>
            <Text style={styles.valueText}>{reservation.phone}</Text>
          </View>
        </View>

        {/* Highlight Box */}
        <View style={styles.box}>
          <View style={[styles.row, { marginBottom: 16 }]}>
            <View style={styles.col}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.valueDisplay}>{reservation.date}</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Time</Text>
              <Text style={styles.valueDisplay}>{reservation.time}</Text>
            </View>
          </View>
          <View style={[styles.row, { marginBottom: 0 }]}>
            <View style={styles.col}>
              <Text style={styles.label}>Party Size</Text>
              <Text style={styles.valueDisplay}>{reservation.guests} Guest(s)</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Dining Area</Text>
              <Text style={styles.valueDisplay}>{reservation.experience?.replace('-', ' ').toUpperCase()}</Text>
            </View>
          </View>
        </View>

        {reservation.requests && (
          <View style={[styles.row, { marginBottom: 10 }]}>
            <View style={[styles.col, { width: '100%' }]}>
              <Text style={styles.label}>Special Requests</Text>
              <View style={styles.requestsContainer}>
                <Text style={[styles.valueText, { fontStyle: 'italic' }]}>
                  &quot;{reservation.requests}&quot;
                </Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.divider} />

        {/* QR Code */}
        {qrCodeUrl && (
          <View style={styles.qrSection}>
            <Image src={qrCodeUrl} style={styles.qrCode} />
            <Text style={styles.qrText}>SCAN TO VERIFY AUTHENTICITY</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.policy}>
            Cancellation Policy: We ask that cancellations be made 48 hours prior. 
            Late cancellations are subject to a fee of $50 per person.
          </Text>
          <View style={[styles.divider, { marginVertical: 8 }]} />
          <Text style={styles.footerText}>Thank you for choosing Aurum & Ember. We look forward to serving you.</Text>
        </View>

      </Page>
    </Document>
  );
}
