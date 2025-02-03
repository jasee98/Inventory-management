// ThemeLink.js
import Link from "next/link"; // Make sure you import Link

export default function ThemeLink({ className, title, href, icon }) {
  return (
    <Link href={href} className={`inline-flex items-center rounded-lg px-6 py-2 text-sm font-medium ${className}`}>
      {title}
      {icon && <span className="ml-2">{icon}</span>} {/* Render the icon if provided */}
    </Link>
  );
}