export default function Loading() {
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-[3px] border-gold/30 border-t-gold rounded-full animate-spin" />
        <p className="text-sm text-gray-500 font-subheading font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
