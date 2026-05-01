"use client";

import { useState } from 'react';
import { Scissors, Menu, X as CloseIcon, Home, User, Users, Star, MessageSquare } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { openBookingModal } = useBooking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cutting', href: '/cutting' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col items-center">
      <nav className="w-full glass-nav px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Scissors className="text-primary w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-2xl font-bold gold-gradient uppercase tracking-tighter">Lucky Men's Parlour</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {allLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-primary transition-colors font-medium text-sm uppercase tracking-widest relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <button 
            onClick={() => openBookingModal()}
            className="bg-primary hover:bg-primary-hover text-black px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 text-sm uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle Button - Only visible on mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all text-white"
        >
          {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Expandable Menu Bar - All links in a horizontal row or grid */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-[95%] mx-auto mt-2 bg-[#1a1a1a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 md:hidden shadow-2xl"
          >
            <div className="flex justify-between items-center w-full px-4">
              {allLinks.filter(l => ['Home', 'Cutting', 'About'].includes(l.name)).map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[11px] font-bold text-white hover:text-primary transition-all uppercase tracking-widest py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
