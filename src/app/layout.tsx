import type { Metadata } from "next";

import "./globals.css";
import { mainFont } from "./ui/fonts";

export const metadata: Metadata = {
  title: "RazArt",
  description: "Resume of Gabriela Menkiewicz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased`}>
        <main className="flex min-h-screen flex-col items-start  px-24 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
