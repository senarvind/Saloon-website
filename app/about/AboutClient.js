"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Scissors, ChevronRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import Link from 'next/link';

export default function AboutClient() {
  const { openBookingModal } = useBooking();
  const stats = [
    { icon: <Award />, label: "Years Experience", value: "15+" },
    { icon: <Users />, label: "Happy Clients", value: "10k+" },
    { icon: <Heart />, label: "Satisfaction", value: "100%" },
    { icon: <Scissors />, label: "Cuts Completed", value: "50k+" },
  ];

  const team = [
    { name: "Rahul Sharma", role: "Senior Stylist", exp: "8 Years", img: "/style-pompadour.png" },
    { name: "Amit Kumar", role: "Beard Specialist", exp: "5 Years", img: "/style-fade.png" },
    { name: "Suresh Gupta", role: "Head Masseur", exp: "12 Years", img: "/style-sidepart.png" },
  ];

  const hairStyles = [
    { name: "Modern Undercut", img: "/style-undercut.png", desc: "Sharp fade with long top" },
    { name: "Classic Pompadour", img: "/style-pompadour.png", desc: "High volume traditional style" },
    { name: "Slick Back", img: "/style-slick-back.png", desc: "Clean and professional look" },
    { name: "Buzz Cut", img: "/style-buzzcut.png", desc: "Low maintenance sharp cut" },
  ];

  const beardStyles = [
    { name: "Royal Beard", img: "/style-royal-beard.png", desc: "Regal and well-defined" },
    { name: "Full Beard", img: "/style-fullbeard.png", desc: "Masculine and thick growth" },
    { name: "Van Dyke", img: "/style-vandyke-new.png", desc: "Pointed goatee and mustache" },
    { name: "Classic Trim", img: "/style-fade.png", desc: "Neat and tidy daily look" },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Owner Section */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-primary/20"
          >
            <Image
              src="/arun.png"
              alt="Arun Sen"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Meet the Founder</span>
            <h1 className="text-5xl font-bold mb-6 gold-gradient">Arun Sen</h1>
            <div className="relative mb-10">
              <div className="absolute -left-6 top-0 w-1 h-full bg-primary/30 rounded-full hidden md:block" />
              <p className="text-gray-400 text-base md:text-lg leading-relaxed md:leading-loose">
                With over <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4">15 years</span> of experience in traditional barbering, <span className="text-white font-semibold">Arun Sen</span> founded <span className="text-white font-bold italic">Lucky Men's Parlour</span> with a clear vision: to revive the golden era of men's grooming.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed md:leading-loose mt-4 italic">
                "I believe that a haircut is not just a service—it's a <span className="text-primary font-bold">ritual of confidence</span> that stays with you."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="premium-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="text-primary">{stat.icon}</div>
                  <div>
                    <h4 className="text-2xl font-bold">{stat.value}</h4>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-[#0d0d0d] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">The Expert Team</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Our team is comprised of hand-picked experts who share Santosh's passion for perfection and traditional grooming values.
          </p>

          <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-16 border-2 border-primary/10">
            <Image
              src="/staff.png"
              alt="Lucky Men's Parlour Team"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="premium-card rounded-2xl text-center overflow-hidden"
              >
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <div className="bg-white/5 inline-block px-4 py-1 rounded-full text-xs text-gray-400">
                    {member.exp} Experience
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 whitespace-nowrap">Signature Hair Styles</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-gray-400">Choose your next look from our expert catalog</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {hairStyles.map((style, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative h-80 w-full">
                  <Image src={style.img} alt={style.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{style.name}</h4>
                  <p className="text-primary text-xs font-medium">{style.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 whitespace-nowrap">Premium Beard Styles</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-gray-400">Precision grooming for the modern gentleman</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beardStyles.map((style, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative h-80 w-full">
                  <Image src={style.img} alt={style.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{style.name}</h4>
                  <p className="text-primary text-xs font-medium">{style.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto premium-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a <span className="gold-gradient">Fresh Look?</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              Join thousands of satisfied clients who trust Arun Sen for their grooming needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openBookingModal("I would like to book an appointment after reading about your history.")}
                className="bg-primary hover:bg-primary-hover text-black px-6 md:px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Appointment <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/#services"
                className="border border-white/20 hover:border-primary px-6 md:px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center w-full sm:w-auto"
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
