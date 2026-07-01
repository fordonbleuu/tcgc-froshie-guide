interface PlaceholderImageProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
}

export default function PlaceholderImage({
  aspectRatio = "16/9",
  label = "Image Placeholder",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl ${className}`}
      style={{ aspectRatio }}
    >
      <div className="text-center p-6">
        <svg
          className="w-12 h-12 mx-auto text-gray-400 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-xs text-gray-300 mt-1">Actual image coming soon</p>
      </div>
    </div>
  );
}
