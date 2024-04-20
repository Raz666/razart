export const Background = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gradient-to-r from-indigo-400 from-10%  via-sky-500/50 via-30% to-emerald-500 to-90%    print:from-white print:text-black">
    <div className=" bg-gradient-to-b from-indigo-400/30 from-10% via-sky-500/30 via-30% to-emerald-500/30 to-90%  ">
      <div className=" bg-gradient-to-r from-black/60 from-20%  via-sky-500/0 to-black/60 to-80% ">
        <div className="striped-bg ">
          <div
            className="relative
            sm:bg-gradient-to-r sm:from-black/10 sm:via-black/0 sm:to-black/10  
            md:bg-gradient-to-r md:from-black/30 md:via-black/0 md:to-black/30
            lg:bg-gradient-to-r lg:from-black/60 lg:via-black/0 lg:to-black/60
            print:bg-white print:from-white print:to-white
            "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TopOverlay = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
                mx-auto w-full
                bg-gradient-to-r from-black/0 from-20% via-black/50 via-50% to-black/0 to-80% 
              print:from-white
              "
  >
    {children}
  </div>
);
