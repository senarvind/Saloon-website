"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scissors, ChevronRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import Link from 'next/link';

export default function CuttingPage() {
  const { openBookingModal } = useBooking();
  const hairStyles = [
    { name: "Classic Pompadour", img: "/style-pompadour.png", desc: "Timeless volume and sleek finish" },
    { name: "Modern Skin Fade", img: "/style-fade.png", desc: "Clean gradient with sharp edges" },
    { name: "Executive Buzz Cut", img: "/style-buzzcut.png", desc: "Low maintenance, high impact" },
    { name: "Sophisticated Side Part", img: "/style-sidepart.png", desc: "Professional and sophisticated look" },
    { name: "Natural Long Flow", img: "/style-longflow.png", desc: "Wavy movement for longer hair" },
    { name: "Modern Top Knot", img: "/style-topknot.png", desc: "Contemporary man bun with undercut" },
  ];

  const beardStyles = [
    { name: "Majestic Full Beard", img: "/style-fullbeard.png", desc: "Thick, well-maintained classic beard" },
    { name: "Sharp Balbo Beard", img: "/style-balbo.png", desc: "Disconnected mustache with a sharp chin beard" },
    { name: "The Anchor Beard", img: "/style-anchor.png", desc: "Pointed chin beard matching a thin mustache" },
    { name: "Sharp Van Dyke", img: "/style-vandyke.png", desc: "Pointed chin beard with sharp mustache" },
    { name: "Professional Stubble", img: "/cat-beard.png", desc: "Rugged yet clean short beard look" },
    { name: "Royal Clean Shave", img: "/cat-beard.png", desc: "Ultra-smooth finish with hot towel treatment" },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-4 bg-primary/10 rounded-full mb-6"
          >
            <Scissors className="text-primary w-10 h-10" />
          </motion.div>
          <h1 className="text-2xl sm:text-5xl font-bold mb-4 gold-gradient whitespace-nowrap">Lucky Signature Styles</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience premium grooming at Lucky Men's Parlour. Explore our collection of signature hair and beard styles.
          </p>
        </div>

        {/* Hair Styles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-primary pl-4">Hair Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairStyles.map((style, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="premium-card rounded-3xl overflow-hidden group"
              >
                <div className="relative h-80 w-full">
                  <Image 
                    src={style.img} 
                    alt={style.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{style.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{style.desc}</p>
                  <button 
                    onClick={() => openBookingModal(`I am interested in the ${style.name} hair style.`)}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Book This Style <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beard Styles Section */}
        <div>
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-primary pl-4">Beard Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beardStyles.map((style, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="premium-card rounded-3xl overflow-hidden group"
              >
                <div className="relative h-80 w-full">
                  <Image 
                    src={style.img} 
                    alt={style.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{style.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{style.desc}</p>
                  <button 
                    onClick={() => openBookingModal(`I am interested in the ${style.name} beard style.`)}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Book This Style <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto premium-card p-12 rounded-[3rem] border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to <span className="gold-gradient">Transform?</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              Our experts are ready to give you the perfect look you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openBookingModal("I would like to book an appointment after browsing your signature styles.")}
                className="bg-primary hover:bg-primary-hover text-black px-6 md:px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                Book Appointment <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/#services"
                className="border border-white/20 hover:border-primary px-6 md:px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
