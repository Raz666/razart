import About from "./about/page";
import Experience from "./experience/page";
import Skills from "./skills/page";
import { titleFont } from "./ui/fonts";

export default function Home() {
  return (
    <>
      <section
        className={`${titleFont.className} flex flex-col items-baseline  antialiased `}
      >
        <h1 className="text-6xl">RazArt</h1>
        <h2 className="pl-1 text-xl">Gabriela Menkiewicz</h2>
      </section>

      <About />
      <Experience />
      <Skills />
    </>
  );
}
