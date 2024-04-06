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
      <body
        className={`${mainFont.className} bg-gradient-to-r from-indigo-400 from-10%  via-sky-500 via-30% to-emerald-500 to-90%  antialiased `}
      >
        <div className="w-100 h-100 bg-gradient-to-b from-indigo-400/30 from-10% via-sky-500/30 via-30% to-emerald-500/30 to-90%  ">
          <div className="striped-bg w-100 h-100 bg-gradient-to-r from-emerald-500/50 from-10%  via-sky-500/50 via-70% to-indigo-500/0  ">
            <main className="layout mx-2 flex min-h-screen flex-col items-start bg-neutral-950/80 shadow-xl shadow-black md:mx-14 lg:mx-auto lg:max-w-screen-md">
              <div className="border-x border-black/20 px-4 py-6  ">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
