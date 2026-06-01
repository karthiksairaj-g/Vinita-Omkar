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

  {/* <PinnedChapter>
    <Hero />
  </PinnedChapter> */}
   
   <Hero />

  <ChapterTransition
    title="How It Began"
  />

  <StoryChapter
    title="Two Lives. One Story."
  />

  <ChapterTransition
    title="The Proposal"
  />

  <StoryChapter
    title="A Moment Forever Remembered"
  />

  <ChapterTransition
    title="The Celebration"
  />

  <StoryChapter
    title="Surrounded By Love"
  />

</ScrollScene>

    </>
  );
}