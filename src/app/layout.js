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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left min-h-screen pt-4 pb-4 gap-16 font-[family-name:var(--font-geist-sans)]">
          <Header /> {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
