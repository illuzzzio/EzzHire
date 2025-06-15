import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Shader from "@/components/Shader";
import { Toaster } from "sonner";
// import BackAudio from "@/components/BackAudio";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "EzzHire",
  description: "Practice as many mock interviews with my platform ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    
    <html lang="en" className = "dark">
      <body
        className={`${monaSans.className} antialiased `}
      >
        {/* <BackAudio/> */}

     
        <Shader />

        {children}
        <Toaster/>
      </body>
    </html>
  );
}
