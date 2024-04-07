import type { Metadata } from "next";

import "../globals.css";
import { mainFont } from "../ui/fonts";

export const metadata: Metadata = {
  title: "RazArt",
  description: "Resume of Gabriela Menkiewicz",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body
        className={`${mainFont.className} bg-gradient-to-r from-indigo-400 from-10%  via-sky-500 via-30% to-emerald-500 to-90%  antialiased `}
      >
        <div className="w-100 h-100 bg-gradient-to-b from-indigo-400/30 from-10% via-sky-500/30 via-30% to-emerald-500/30 to-90%  ">
          <div className=" w-100 h-100 bg-gradient-to-r from-black/60 from-20%  via-sky-500/0 to-black/60 to-80% ">
            <div className="striped-bg w-100 h-100">
              <div
                className=" w-100 h-100 
                            sm:bg-gradient-to-r sm:from-black/10 sm:via-black/0 sm:to-black/10  
                            md:bg-gradient-to-r md:from-black/30 md:via-black/0 md:to-black/30
                            lg:bg-gradient-to-r lg:from-black/60 lg:via-black/0 lg:to-black/60
                          "
              >
                <main className="layout mx-2 flex min-h-screen flex-col items-start bg-neutral-950/80 shadow-xl shadow-black md:mx-14 lg:mx-auto lg:max-w-screen-md">
                  <div className="border-x border-black/20 px-4 py-6  ">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
