import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Nale Thottu Padikkam", description: "The productivity app that helps you start tomorrow." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}


