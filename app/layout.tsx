import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "AiiImage by B.",
  description: "Génerer des images grace à l'IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-950 antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
