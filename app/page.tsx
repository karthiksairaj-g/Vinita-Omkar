import Hero from "@/components/ui/Hero";
import ScrollScene from "@/components/storytelling/ScrollScene";
import ScrollNarrative from "@/components/storytelling/ScrollNarrative";
import BackgroundAtmosphere from "@/components/animations/BackgroundAtmosphere";

export default function Home() {
  return (
    <>

    <BackgroundAtmosphere />
      <ScrollScene>
        <Hero />
        <ScrollNarrative />        
      </ScrollScene>
    </>
  );
}