import "./globals.css";
import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import NavBar from "../components/NavBar";

const inriaSans = Inria_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Restaurante Los Amigos",
  description: "Restaurante Los Amigos es un restaurante chino en Valencia",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavBar />
      <body className={inriaSans.className}>{children}</body>
    </html>
  );
}
