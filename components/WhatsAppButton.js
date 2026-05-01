"use client";

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function WhatsAppButton() {
  const { openBookingModal } = useBooking();

  return (
    <motion.button
      onClick={() => openBookingModal()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center group cursor-pointer"
    >
      <div className="absolute right-full mr-3 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </div>
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
    </motion.button>
  );
}
