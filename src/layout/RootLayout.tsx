import localFont from "next/font/local";
import { ReactNode } from "react";

const hjdFont = localFont({
  src: "../fonts/Harryduncan.woff2",
  variable: "--font-hjd",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={`${hjdFont.variable}`}>{children}</div>;
}
