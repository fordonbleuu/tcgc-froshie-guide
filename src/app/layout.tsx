import type { Metadata } from "next";
import { Bebas_Neue, Poppins, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import BackToTop from "@/components/layout/BackToTop";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tangub City Global College | Freshmen Guide",
    template: "%s | TCGC Freshmen Guide",
  },
  icons: [{ rel: "icon", url: "/logo.png", type: "image/png" }],
  description:
    "Your comprehensive guide to Tangub City Global College. Explore programs, campus life, admission requirements, and everything you need as an incoming freshman.",
  keywords: [
    "Tangub City Global College",
    "TCGC",
    "freshmen guide",
    "college programs",
    "campus life",
    "admission",
    "Misamis Occidental",
    "Philippines",
  ],
  openGraph: {
    title: "Tangub City Global College | Freshmen Guide",
    description:
      "Your comprehensive guide to Tangub City Global College. Explore programs, campus life, admission requirements, and everything you need as an incoming freshman.",
    type: "website",
    locale: "en_US",
    siteName: "TCGC Freshmen Guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white font-body text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
