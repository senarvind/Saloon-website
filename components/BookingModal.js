"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal, bookingMessage } = useBooking();

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookingModal}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md bg-[#1a1a1a] border border-primary/30 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
          >
            <button
              onClick={closeBookingModal}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 gold-gradient inline-block">Select Your Expert</h3>
              <p className="text-gray-400 text-sm">Choose who you'd like to book with</p>
            </div>

            <div className="space-y-4">
              {[
                { name: "Arun Sen", number: "916264067910", role: "Master Barber" },
                { name: "Arun Sen", number: "919691169433", role: "Senior Stylist" }
              ].map((expert, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${expert.number}?text=Hello ${expert.name}! ${bookingMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeBookingModal}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {expert.name[0]}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-bold group-hover:text-primary transition-colors">{expert.name}</h4>
                    <p className="text-xs text-gray-500">{expert.role}</p>
                  </div>
                  <Phone className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-gray-500">
              Clicking will open WhatsApp to start your booking.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
