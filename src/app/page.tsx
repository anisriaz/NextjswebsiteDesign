
import { Header }  from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services }  from "@/sections/Services";
import { StatsSection }  from "@/sections/Stats";
import { Astrologer }  from "@/sections/Astrologer";
import { Vedic }  from "@/sections/Vedic";
import { CircularHero } from "@/sections/Consult";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
      <>
        <Header />
        <Hero />
        <Services />
        <StatsSection />
        <Astrologer />
        <CircularHero />
        <Vedic />
        <Footer />
      </>
  );
}
