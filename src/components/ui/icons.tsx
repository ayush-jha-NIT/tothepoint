import type { SVGProps } from "react";

export type IconName =
  | "star" | "sparkles" | "arrow-right" | "arrow-up-right" | "menu" | "close"
  | "mail" | "phone" | "message" | "shield" | "calendar" | "chevron-right";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 20, ...rest }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    star: <path d="m12 2 2.9 6.2L22 9.3l-5 4.8 1.2 7L12 17.8l-6.2 3.3 1.2-7-5-4.8 7.1-1.1L12 2Z" />,
    sparkles: <><path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3Z" /><path d="m20 18 .7 1.3L22 20l-1.3.7L20 22l-.7-1.3L18 20l1.3-.7L20 18ZM4 2l.7 1.3L6 4l-1.3.7L4 6l-.7-1.3L2 4l1.3-.7L4 2Z" /></>,
    "arrow-right": <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>,
    "arrow-up-right": <><path d="M7 17 17 7M8 7h9v9" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="M5 5l14 14M19 5 5 19" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2.5 2.5a14.8 14.8 0 0 1-7-7L9 8 7 3Z" />,
    message: <path d="M20 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-4.3A8.5 8.5 0 1 1 20 11.5Z" />,
    shield: <><path d="m12 2 8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4Z" /><path d="m8.5 12 2.3 2.3 4.7-4.7" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18" /></>,
    "chevron-right": <path d="m9 5 7 7-7 7" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" focusable="false" aria-hidden="true" {...rest}>{paths[name]}</svg>;
}
