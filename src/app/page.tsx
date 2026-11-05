import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex w-full flex-1 flex-col">
        <Hero />
        <Works />
        <About />
      </div>
      <Footer />
    </>
  );
}
