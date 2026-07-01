"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Briefcase, Info, type LucideIcon } from "lucide-react";
import type { InstituteData } from "@/lib/institutes-data";

interface InstituteModalProps {
  institute: InstituteData | null;
  onClose: () => void;
}

type TabId = "overview" | "programs" | "careers";

const tabs: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "programs", label: "Programs Offered", icon: BookOpen },
  { id: "careers", label: "Career Opportunities", icon: Briefcase },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

export default function InstituteModal({ institute, onClose }: InstituteModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  if (!institute) return null;

  const isActive = (id: TabId) => activeTab === id;

  return (
    <AnimatePresence>
      {institute && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${institute.color}`} />

            <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 border border-gray-200 shadow-sm">
                  <img
                    src={institute.logo}
                    alt={`${institute.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-heading text-primary uppercase tracking-wide leading-tight">
                    {institute.title}
                  </h2>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </motion.button>
            </div>

            <div className="flex border-b border-gray-100 px-6 md:px-8">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-subheading font-medium border-b-2 transition-all duration-200 ${
                      isActive(tab.id)
                        ? "border-gold text-gold"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden text-xs">
                      {tab.id === "overview" ? "About" : tab.id === "programs" ? "Programs" : "Careers"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {activeTab === "overview" && (
                    <div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {institute.overview}
                      </p>
                    </div>
                  )}

                  {activeTab === "programs" && (
                    <div className="space-y-6">
                      <p className="text-sm text-gray-500 font-subheading font-medium">
                        Degree Programs Offered:
                      </p>
                      <ul className="space-y-3">
                        {institute.programs.map((prog, i) => (
                          <motion.li
                            key={prog}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="flex items-start gap-3 p-3 bg-light-gray rounded-xl"
                          >
                            <span className="w-6 h-6 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-subheading font-bold text-primary">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </span>
                            <span className="text-gray-800 text-sm font-medium">
                              {prog}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "careers" && (
                    <div className="space-y-6">
                      <p className="text-sm text-gray-500 font-subheading font-medium">
                        Potential Career Paths:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {institute.careers.map((career, i) => (
                          <motion.div
                            key={career}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.3 }}
                            className="flex items-center gap-3 p-3 bg-light-gray rounded-xl"
                          >
                            <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Briefcase className="w-4 h-4 text-gold" />
                            </div>
                            <span className="text-gray-800 text-sm">
                              {career}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-6 md:px-8 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 font-subheading font-semibold text-sm rounded-xl hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
