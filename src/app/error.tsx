"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading text-primary uppercase tracking-wide">
          Something went wrong
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          An unexpected error occurred. Please try again or contact support if
          the issue persists.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-subheading font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
