import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: "Lucky Men's Parlour | Premium Traditional Salon",
  description: 'Experience the art of grooming with Arun Sen and his expert team.',
};

import { BookingProvider } from '@/context/BookingContext';
import BookingModal from '@/components/BookingModal';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
