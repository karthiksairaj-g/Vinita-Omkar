import Hero from "@/components/ui/Hero";
import ScrollScene from "@/components/storytelling/ScrollScene";
import ScrollNarrative from "@/components/storytelling/ScrollNarrative";
import BackgroundAtmosphere from "@/components/animations/BackgroundAtmosphere";
import ScrollToTop from "@/components/animations/ScrollToTop";

export default function Home() {
  return (
    <>

    <BackgroundAtmosphere />
      <ScrollScene>
        <Hero />
        <ScrollNarrative />        
      </ScrollScene>
      <ScrollToTop />
    </>
  );
}