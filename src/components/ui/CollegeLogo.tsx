interface CollegeLogoProps {
  className?: string;
  iconOnly?: boolean;
  iconClassName?: string;
  textClassName?: string;
  variant?: "light" | "dark" | "gold";
}

export default function CollegeLogo({
  className = "",
  iconOnly = false,
  iconClassName = "",
  textClassName = "",
  variant = "light",
}: CollegeLogoProps) {
  const textColor = variant === "light" ? "text-white" : variant === "gold" ? "text-gold" : "text-primary";
  const iconColor = variant === "light" ? "text-gold" : variant === "gold" ? "text-white" : "text-primary";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 60 60"
        className={`w-12 h-12 md:w-14 md:h-14 ${iconColor} ${iconClassName}`}
        fill="none"
        aria-hidden="true"
      >
        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path
          d="M30 12 L42 24 L30 20 L18 24 Z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M18 24 L30 20 L30 40 L18 36 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M30 20 L42 24 L42 40 L30 44 Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M18 36 L30 40 L30 44 L18 40 Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M30 40 L42 36 L42 40 L30 44 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <circle cx="30" cy="26" r="3" fill="currentColor" opacity="0.9" />
        <line x1="10" y1="52" x2="50" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text
          x="30"
          y="58"
          textAnchor="middle"
          fontSize="6"
          fontWeight="bold"
          fill="currentColor"
        >
          LUX MUNDI
        </text>
      </svg>
      {!iconOnly && (
        <div className="text-left">
          <h1
            className={`text-xl md:text-2xl font-heading tracking-wider leading-none ${textColor} ${textClassName}`}
          >
            Tangub City
            <br />
            <span className="text-gold">Global College</span>
          </h1>
        </div>
      )}
    </div>
  );
}
