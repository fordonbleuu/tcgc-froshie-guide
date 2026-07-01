"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

function pulse() {
  return {
    animate: {
      opacity: [1, 0.4, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };
}

export function SkeletonCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden ${className}`}
    >
      <motion.div
        className="h-48 bg-gray-200"
        {...pulse()}
      />
      <div className="p-6 space-y-3">
        <motion.div className="h-5 bg-gray-200 rounded-md w-3/4" {...pulse()} />
        <motion.div className="h-3 bg-gray-200 rounded-md w-full" {...pulse()} />
        <motion.div className="h-3 bg-gray-200 rounded-md w-5/6" {...pulse()} />
        <div className="pt-3">
          <motion.div className="h-9 bg-gray-200 rounded-xl w-28" {...pulse()} />
        </div>
      </div>
    </div>
  );
}

export function SkeletonText({ className = "" }: SkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <motion.div className="h-4 bg-gray-200 rounded-md w-full" {...pulse()} />
      <motion.div className="h-4 bg-gray-200 rounded-md w-5/6" {...pulse()} />
      <motion.div className="h-4 bg-gray-200 rounded-md w-4/6" {...pulse()} />
    </div>
  );
}

export function SkeletonHeading({ className = "" }: SkeletonProps) {
  return (
    <motion.div
      className={`h-8 bg-gray-200 rounded-lg w-1/2 ${className}`}
      {...pulse()}
    />
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
