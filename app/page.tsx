import Hero from "@/components/ui/Hero";
import ScrollNarrative from "@/components/storytelling/ScrollNarrative";
import ScrollProgress from "@/components/storytelling/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <ScrollNarrative />
    </>
  );
}