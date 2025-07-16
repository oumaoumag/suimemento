export default function SuiLogo({
  className = "w-8 h-8",
  color = "currentColor",
}: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="suiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>

      {/* Sui Logo - Stylized Water Drop */}
      <path
        d="M100 20C100 20 40 60 40 120C40 160 70 180 100 180C130 180 160 160 160 120C160 60 100 20 100 20Z"
        fill={color === "currentColor" ? "url(#suiGradient)" : color}
        className="drop-shadow-lg"
      />

      {/* Inner highlight */}
      <path
        d="M100 40C100 40 60 70 60 110C60 140 80 155 100 155C120 155 140 140 140 110C140 70 100 40 100 40Z"
        fill="rgba(255, 255, 255, 0.2)"
      />

      {/* Reflection */}
      <ellipse cx="85" cy="80" rx="15" ry="25" fill="rgba(255, 255, 255, 0.3)" transform="rotate(-20 85 80)" />
    </svg>
  )
}
