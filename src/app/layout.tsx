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
        <main className="layout mx-14 flex min-h-screen flex-col items-start bg-neutral-950/80 px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
