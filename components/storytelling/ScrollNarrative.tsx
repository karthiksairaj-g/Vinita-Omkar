import StoryChapter from "./StoryChapter";
import ChapterTransition from "./ChapterTransition";
import WeddingTimeline from "./WeddingTimeline";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionConnector from "@/components/animations/SectionConnector";
import FinalePromise from "@/components/finale/FinalePromise";
import FinaleReveal from "@/components/finale/FinaleReveal";
import FinaleClimax from "@/components/finale/FinaleClimax";
import FinaleSignature from "@/components/finale/FinaleSignature";


export default function ScrollNarrative() {
  return (
    <>
      {/* Chapter One */}
      
              <ChapterTransition title="A Beginning" />
      
              <StoryChapter
                subtitle="Chapter One"
                title="How It Began"
                intro="Some stories begin quietly. Two people living separate lives, never imagining destiny was already writing their story."
                memoryLabel="Memory #01"
                memoryCaption="A chance encounter."
                outro="Then came a conversation. A laugh. A moment that would change everything."
              />
      
              {/* Chapter Two */}
      
              <ChapterTransition title="A Promise" />
      
              <StoryChapter
                subtitle="Chapter Two"
                title="The Proposal"
                intro="Every love story has a moment when everything changes. A moment when hope becomes a promise and tomorrow suddenly feels closer."
                memoryLabel="The Proposal"
                memoryCaption="One question. One answer. Forever."
                outro="A memory that would become the beginning of a new chapter."
              />
      
              {/* Chapter Three */}
      
              <ChapterTransition title="Together" />
      
              <StoryChapter
                subtitle="Chapter Three"
                title="The Celebration"
                intro="Family. Friends. Laughter. Celebration. The people who shaped their journey gathered to share in the joy of what was to come."
                memoryLabel="The Gathering"
                memoryCaption="Every smile tells a story."
                outro="Together they celebrate the journey that brought them here."
              />
      
              {/* Chapter Four */}
      
              <ChapterTransition title="The Day Arrives" />
      
              <StoryChapter
                subtitle="Chapter Four"
                title="Wedding Day"
                intro="The day arrives. Months of anticipation give way to a moment that will be remembered for a lifetime."
                memoryLabel="The Vows"
                memoryCaption="Two hearts. One promise."
                outro="The beginning of forever, witnessed by the people they love most."
              />
      
              {/* Chapter Five */}
      
              <ChapterTransition title="Forever" />
      
              <StoryChapter
                subtitle="Chapter Five"
                title="Forever Begins Here"
                intro="Marriage is not the end of the story. It is the start of a lifetime of adventures, memories, and moments yet to be written."
                memoryLabel="The Future"
                memoryCaption="Many memories still to come."
                outro="Their story continues beyond this moment, one beautiful chapter at a time."
              />
      
            <SectionConnector
  subtitle="Memories"
  title="Every Story Leaves Behind Beautiful Moments"
  description="Some moments pass in an instant, yet remain in our hearts forever. These photographs capture the laughter, the celebrations, and the quiet memories that shaped Vinita and Omkar's journey together."
/>

            {/* Gallary Grid*/ }
            <GalleryGrid />

            <SectionConnector
  subtitle="The Journey"
  title="Every Chapter Led To This Day"
  description="Behind every celebration lies a collection of milestones, promises, and unforgettable moments. Together they tell the story of two lives gradually becoming one."
/>

            {/* Timeline */}
            <WeddingTimeline />

            <FinalePromise />

            <FinaleReveal />

            <FinaleClimax />

            <FinaleSignature />
    </>
  );
}