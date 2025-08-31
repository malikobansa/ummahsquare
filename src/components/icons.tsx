import type { SVGProps } from 'react';

export const UmmahSquareLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>UmmahSquare Logo</title>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 12h10" />
    <path d="M12 7v10" />
  </svg>
);

export const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>TikTok Icon</title>
      <path d="M21 7.5a4.5 4.5 0 0 1-4.5 4.5H12v-6A4.5 4.5 0 0 1 16.5 2" />
      <path d="M12 12v9" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </svg>
  );
