import localFont from "next/font/local";
import { M_PLUS_Code_Latin } from "next/font/google";
import { ReactNode } from "react";

const hjdFont = localFont({
  src: "../fonts/Harryduncan.woff2",
  variable: "--font-hjd",
});

const googleFont = M_PLUS_Code_Latin({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"], // Adjust weights as needed
  variable: "--font-default",
  fallback: ["Courier New"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${hjdFont.variable} ${googleFont.variable}`}>
      {children}
    </div>
  );
}
