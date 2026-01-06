import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/layout/scroll-to-top";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa | Product Manager | Automation Engineer",
  description: "Research-driven Technology Professional with experience leading cross-functional engineering teams across automation, embedded systems, AI-enabled solutions, and product innovation.",
  icons: {
    icon: [
      { url: "/images/logo/logo-img.png", sizes: "any", type: "image/png" },
      { url: "/images/logo/logo-img.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/logo-img.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/logo/logo-img.png",
    apple: "/images/logo/logo-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}
