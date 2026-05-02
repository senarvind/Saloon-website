"use client";

import { cloneElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Smile, Coffee, ChevronRight } from 'lucide-react';

export default function CategoriesClient() {
  const categories = [
    { 
      name: "Hair Styling", 
      icon: <Scissors />, 
      img: "/cat-hair.png",
      count: "12 Services",
      desc: "From basic cuts to royal treatments",
      services: ["Classic Cut", "Skin Fade", "Long Hair Styling", "Coloring"]
    },
    { 
      name: "Beard & Shave", 
      icon: <Sparkles />, 
      img: "/cat-beard.png",
      count: "8 Services",
      desc: "Precision grooming for the perfect gentleman",
      services: ["Hot Towel Shave", "Beard Trim", "Beard Coloring", "Stubble Shape"]
    },
    { 
      name: "Face & Skin", 
      icon: <Smile />, 
      img: "/cat-face.png",
      count: "6 Services",
      desc: "Refresh and rejuvenate your skin",
      services: ["Luxury Facial", "Gold Mask", "Face Scrub", "Deep Cleansing"]
    },
    { 
      name: "Relaxation", 
      icon: <Coffee />, 
      img: "/cat-relax.png",
      count: "5 Services",
      desc: "De-stress with our premium massages",
      services: ["Head Massage", "Shoulder Rub", "Neck Massage", "Full Relaxation"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gold-gradient">Service Categories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our curated selection of premium grooming services at Lucky Men's Parlour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card rounded-3xl group relative overflow-hidden flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={cat.img} 
                  alt={cat.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-6 left-10 flex items-center gap-4">
                  <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl text-primary">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{cat.name}</h3>
                    <span className="text-primary text-sm font-medium">{cat.count}</span>
                  </div>
                </div>
              </div>

              <div className="p-10 pt-6 relative z-10">
                <p className="text-gray-400 mb-8 max-w-md">{cat.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.services.map((s, si) => (
                    <span key={si} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/916264067910?text=Hello! I would like to know more about ${cat.name} services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary text-primary hover:text-black px-6 py-3 rounded-xl font-bold transition-all inline-flex items-center gap-2"
                >
                  Explore Services <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
