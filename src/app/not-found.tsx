import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-[10rem] md:text-[12rem] font-heading text-primary/10 leading-none select-none">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-heading text-primary uppercase tracking-wide -mt-8">
          Page Not Found
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-subheading font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg"
          >
            Go Home
          </Link>

        </div>
      </div>
    </div>
  );
}
