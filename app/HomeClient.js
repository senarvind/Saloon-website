"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, MapPin, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import Link from 'next/link';

export default function HomeClient() {
  const [selectedService, setSelectedService] = useState(null);
  const { openBookingModal } = useBooking();

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const services = [
    {
      name: "Hair Cutting",
      price: "₹150 - ₹500",
      desc: "Precision cuts for a sharp look",
      image: "/interior.png",
      subCategories: [
        { name: "Normal Cut", price: "₹150" },
        { name: "Simple Cut", price: "₹150" },
        { name: "Sleek Cut", price: "₹200" },
        { name: "Faded Cut", price: "₹250" },
        { name: "Buzz Cut", price: "₹150" },
        { name: "Kids Cut", price: "₹100" },
        { name: "Hair Styling", price: "₹100" },
      ]
    },
    {
      name: "Beard Grooming",
      price: "₹100 - ₹300",
      desc: "Precision trim and hot towel finish",
      image: "/interior.png",
      subCategories: [
        { name: "Beard Trim", price: "₹100" },
        { name: "Beard Styling", price: "₹150" },
        { name: "Luxury Shave", price: "₹200" },
        { name: "Moustache Shape", price: "₹50" },
      ]
    },
    {
      name: "Royal Head Massage",
      price: "₹200 - ₹500",
      desc: "Stress-relieving 20-minute massage",
      image: "/interior.png",
      subCategories: [
        { name: "Dry Massage", price: "₹200" },
        { name: "Oil Massage", price: "₹300" },
        { name: "Luxury Head Spa", price: "₹500" },
        { name: "Vibrator Massage", price: "₹150" },
      ]
    },
    {
      name: "Luxury Facial",
      price: "₹300 - ₹1500",
      desc: "Deep cleaning with premium products",
      image: "/interior.png",
      subCategories: [
        { name: "De-tan Pack", price: "₹300" },
        { name: "Gold Facial", price: "₹1000" },
        { name: "Fruit Facial", price: "₹600" },
        { name: "O3+ Professional", price: "₹1500" },
      ]
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior.png"
            alt="Salon Interior"
            fill
            className="object-cover opacity-40 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-start md:items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-0 pt-2 md:pt-0"
          >
            <h1 className="text-2xl sm:text-5xl md:text-8xl font-bold leading-tight mb-4 md:mb-6 md:mt-2">
              Lucky Men's <span className="gold-gradient">Parlour</span> Hair Saloon
            </h1>
            <div className="hidden md:block relative h-[150px] w-[400px] mb-8 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Image
                src="/hero-sub.png"
                alt="Signature Grooming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="md:hidden mt-4 mb-10">
              <div className="relative w-full max-w-[400px] h-[500px] mx-auto rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <Image
                  src="/arun.png"
                  alt="Arun Sen"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <h3 className="text-3xl font-bold text-white">Arun Sen</h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs">Founder of Lucky Men's Parlour</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-[450px] h-[600px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              <Image
                src="/arun.png"
                alt="Arun Sen"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-bold">Arun Sen</h3>
                <p className="text-primary font-medium">Founder of Lucky Men's Parlour</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap">Our Premium Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-8 rounded-2xl cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.name}</h3>
                  <span className="text-primary font-bold">{service.price.split(' ')[0]}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  View Rates <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedService && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedService(null)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="relative w-full max-w-2xl bg-[#141414] border border-primary/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="p-6 md:p-12">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-400" />
                    </button>

                    <div className="mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 gold-gradient inline-block">
                        {selectedService.name}
                      </h3>
                      <p className="text-gray-400">{selectedService.desc}</p>
                    </div>

                    <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                      {selectedService.subCategories.map((sub, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/20 transition-all group"
                        >
                          <span className="font-medium text-lg text-gray-200 group-hover:text-white">{sub.name}</span>
                          <span className="text-primary font-bold text-xl">{sub.price}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10 flex gap-4">
                      <button
                        onClick={() => openBookingModal(`I would like to book a ${selectedService.name} session.`)}
                        className="flex-1 bg-primary hover:bg-primary-hover text-black font-bold py-4 rounded-full text-center transition-all"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Home CTA Section */}
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto premium-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-primary/20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the <span className="gold-gradient">Mastery</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                Book your slot today with Arun Sen or our expert team.
              </p>
              <button
                onClick={() => openBookingModal()}
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4 md:px-12 md:py-5 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-base md:text-lg shadow-[0_0_30px_rgba(212,175,55,0.2)] w-full sm:w-auto"
              >
                Book Appointment <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-6 p-8 premium-card rounded-2xl">
              <div className="p-4 bg-primary/10 rounded-full">
                <Clock className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Opening Hours</h4>
                <p className="text-gray-400 text-sm">Mon - Sun: 9:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-8 premium-card rounded-2xl">
              <div className="p-4 bg-primary/10 rounded-full">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Our Location</h4>
                <p className="text-gray-400 text-sm">Main Road, Civil Lines, Prayagraj</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-8 premium-card rounded-2xl">
              <div className="p-4 bg-primary/10 rounded-full">
                <Phone className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 62640 67910</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
