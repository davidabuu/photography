import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const open = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Home||Mulitmedia Ltd",
  description:
    " We are a digital multimedia production company with core interest in Photography, videography, digital design and print, event planning and management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
