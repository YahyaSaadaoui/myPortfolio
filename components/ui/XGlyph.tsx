import * as React from "react";

export default function XGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2H21l-7.5 8.57L22 22h-7.271l-5.165-6.307L3.756 22H1l8.038-9.18L2 2h7.271l4.66 5.69L18.244 2zm-2.52 18h2.086L8.464 4h-2.08L15.724 20z"/>
    </svg>
  );
}
