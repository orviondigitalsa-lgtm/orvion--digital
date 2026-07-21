import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Digital Marketing Agency Potchefstroom | Orvion Digital",
  description:
    "Orvion Digital is a digital marketing agency in Potchefstroom offering professional website design, SEO, lead generation, Google Business and social media services to help businesses grow.",
};

  description:
    "Orvion Digital helps South African businesses get found, generate more leads and turn online attention into real customers through websites, SEO, Google Business, social media and digital strategy.",

  keywords: [
    "Orvion Digital",
    "web design South Africa",
    "website design Potchefstroom",
    "SEO South Africa",
    "SEO Potchefstroom",
    "lead generation South Africa",
    "Google Business optimisation",
    "social media management South Africa",
    "digital marketing Potchefstroom",
    "digital marketing South Africa",
  ],

  authors: [
    {
      name: "Orvion Digital",
    },
  ],

  creator: "Orvion Digital",
  publisher: "Orvion Digital",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Orvion Digital",
    title:
      "Orvion Digital | Turn Attention Into Real Customers",
    description:
      "Websites, SEO, lead generation, Google Business, social media and digital strategies designed to help South African businesses attract more customers.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Orvion Digital | Turn Attention Into Real Customers",
    description:
      "Helping South African businesses get found, generate leads and win more customers.",
  },

  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
