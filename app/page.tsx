import Hero from "@/components/ui/Hero";
import ScrollScene from "@/components/storytelling/ScrollScene";
import ScrollNarrative from "@/components/storytelling/ScrollNarrative";

export default function Home() {
  return (
    <>
      <ScrollScene>
        <Hero />
        <ScrollNarrative />        
      </ScrollScene>
    </>
  );
}