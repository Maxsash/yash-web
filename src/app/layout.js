import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Yash Shrivastava",
  description: "A place with all you need to know about me and what I do.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/api/rss"
          title="RSS Feed"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-secondary-100 to-primary-100 pb-4 font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
