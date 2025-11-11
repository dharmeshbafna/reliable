import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Reliable Automation - Smart Home Automation Solutions",
  description: "Transform your home into an intelligent living space with Reliable Smart Solutions's premium smart home solutions. Based in Ahmedabad, we offer complete automation for homes, hotels, and offices.",
  keywords: ["Reliable Automation", "Reliable Smart Solutions", "Smart Home", "Home Automation", "Ahmedabad", "Hotel Automation", "Office Automation", "IoT Solutions"],
  authors: [{ name: "Anriyo Tech Solutions Team" }],
  openGraph: {
    title: "Reliable Automation - Smart Home Solutions",
    description: "Premium home Smart solutions in Ahmedabad. Transform your living space with intelligent automation.",
    url: "https://reliableautomation.in",
    siteName: "Reliable Automation",
    type: "website",
  },

   icons: {
    icon: "/favicon.ico",                 // default favicon
    shortcut: "/favicon-32x32.png",       // optional
    apple: "/apple-touch-icon.png"        // optional
  },

  twitter: {
    card: "summary_large_image",
    title: "Reliable Smart Solution - Smart Home Solutions",
    description: "Premium home automation solutions in Ahmedabad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
