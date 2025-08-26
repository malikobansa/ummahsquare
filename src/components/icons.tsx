import type { SVGProps } from 'react';

export const GlobalConnectLogo = (props: SVGProps<SVGSVGElement>) => (
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
    <title>Global Connect Logo</title>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    <path d="M2.5 9h19" />
    <path d="M2.5 15h19" />
    <path d="M9 2.5a15.5 15.5 0 0 1 6 19" />
    <path d="M15 2.5a15.5 15.5 0 0 0-6 19" />
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
