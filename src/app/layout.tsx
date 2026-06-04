import StoreProvider from "@/app/StoreProvider";
import AddedCart from "@/components/AddedCart";
import Footer from "@/components/Footer";
import MobileBottomMenu from "@/components/MobileBottomMenu";
import Navbar from "@/components/Navbar";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubimall.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Qubimall - Your One-Stop Shopping Destination",
    template: "%s | Qubimall",
  },
  description:
    "Shop the latest trends in fashion, electronics, home decor, beauty, books, groceries and more at Qubimall. Secure checkout, fast shipping, and unbeatable prices.",
  keywords: [
    "online shopping", "ecommerce", "fashion", "electronics",
    "home decor", "beauty products", "books", "grocery",
    "Qubimall", "buy online", "best deals", "India shopping",
  ],
  authors: [{ name: "Qubimall", url: siteUrl }],
  creator: "Qubimall",
  publisher: "Qubimall",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Qubimall",
    title: "Qubimall - Your One-Stop Shopping Destination",
    description:
      "Shop the latest trends in fashion, electronics, home decor, beauty, books, groceries and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qubimall - Shop the Best Deals Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubimall - Your One-Stop Shopping Destination",
    description:
      "Shop the latest trends in fashion, electronics, home decor, beauty, books, groceries and more.",
    images: ["/og-image.jpg"],
    creator: "@qubimall",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googleb146f202e767abd7",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <div className="flex min-h-screen flex-col">
                <header>
                  <Navbar />
                </header>
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <AddedCart />
                <MobileBottomMenu />
                <ScrollToTopBtn />
                <Toaster />
              </div>
            </AuthProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
