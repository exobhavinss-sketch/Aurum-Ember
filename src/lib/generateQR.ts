import QRCode from 'qrcode';

export async function generateReservationQR(confirmationNumber: string): Promise<string> {
  try {
    const url = `https://aurumandember.com/verify/${confirmationNumber}`;
    const dataUrl = await QRCode.toDataURL(url, {
      width: 400,
      margin: 1,
      color: {
        dark: '#1C1C22',
        light: '#FFFFFF',
      },
    });
    return dataUrl;
  } catch (err) {
    console.error('Failed to generate QR code', err);
    return '';
  }
}
