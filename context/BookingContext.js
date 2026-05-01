"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");

  const openBookingModal = (message = "I would like to book an appointment at Lucky Men's Parlour.") => {
    setBookingMessage(message);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isBookingModalOpen]);

  return (
    <BookingContext.Provider value={{ isBookingModalOpen, bookingMessage, openBookingModal, closeBookingModal }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
