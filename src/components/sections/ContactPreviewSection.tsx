"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    details: "Tangub City, Misamis Occidental\nPhilippines 7214",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "(088) 555-1234",
  },
  {
    icon: Mail,
    title: "Email",
    details: "admissions@tcgc.edu.ph",
  },
];

export default function ContactPreviewSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact-preview" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-subheading font-semibold text-gold uppercase tracking-[0.2em]">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary uppercase tracking-wide leading-none mt-3">
              We&apos;re Here
              <br />
              <span className="text-gold">to Help</span>
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mt-6" />
            <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
              Have questions about programs, admissions, or campus life? Our
              admissions team is ready to assist you. Reach out anytime, and
              we&apos;ll be happy to guide you through your journey.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-subheading font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.button
              onClick={scrollToContact}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-subheading font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" />
              Send Us a Message
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-light-gray rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <h3 className="text-xl font-heading text-primary uppercase tracking-wide mb-6 relative">
                Office Hours
              </h3>

              <div className="relative space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-sm text-gray-600">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-900">Saturday</span>
                  <span className="text-sm text-gray-600">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium text-gray-900">Sunday</span>
                  <span className="text-sm text-gray-600">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <p className="text-sm text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Visit our campus for a personal tour and see what TCGC has to offer!
                </p>
              </div>

              <motion.button
                onClick={scrollToContact}
                className="mt-6 inline-flex items-center gap-2 text-primary font-subheading font-semibold group text-sm"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                View full contact details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
