import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffect from "../components/CursorEffect";
import MuiRegistry from "@/lib/MuiRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yash",
  description: "Personal website of Yash, a software engineer.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MuiRegistry>
        <CursorEffect />
        {children}
        </MuiRegistry>
      </body>
    </html>
  );
}
