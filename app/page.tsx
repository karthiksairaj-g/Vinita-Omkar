import Hero from "@/components/ui/Hero";
//import ScrollNarrative from "@/components/storytelling/ScrollNarrative";
//import ScrollProgress from "@/components/storytelling/ScrollProgress";
import ScrollScene from "@/components/storytelling/ScrollScene";
//import PinnedChapter from "@/components/storytelling/PinnedChapter";
import ChapterTransition from "@/components/storytelling/ChapterTransition";
import StoryChapter from "@/components/storytelling/StoryChapter";

export default function Home() {
  return (
    <>
     

      <ScrollScene>

   <Hero />

  <ChapterTransition
    title="How It Began"
  />

  <StoryChapter
  title="Two Lives. One Story."
  intro="Some stories begin quietly. Two people living separate lives, never imagining destiny was already writing their story."
  memoryLabel="Memory #01"
  memoryCaption="A chance encounter."
  outro="Then came a conversation. A laugh. A moment that would change everything."
/>

  <ChapterTransition
    title="The Proposal"
  />

  <StoryChapter
  title="A Moment Forever Remembered"
  intro="Every love story has a moment when everything changes."
  memoryLabel="The Proposal"
  memoryCaption="One question. One answer. Forever."
  outro="A memory that would become the beginning of a new chapter."
/>

  <ChapterTransition
    title="The Celebration"
  />

  <StoryChapter
  title="Surrounded By Love"
  intro="Family. Friends. Laughter. Celebration."
  memoryLabel="The Gathering"
  memoryCaption="Every smile tells a story."
  outro="Together they celebrate the journey that brought them here."
/>

</ScrollScene>

    </>
  );
}