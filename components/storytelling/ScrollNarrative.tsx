import StoryChapter from "./StoryChapter";
import ChapterTransition from "./ChapterTransition";
import WeddingTimeline from "./WeddingTimeline";

export default function ScrollNarrative() {
  return (
    <>
      <StoryChapter
        subtitle="Chapter One"
        title="How It Began"
        intro="Two paths crossed and a story began."
        memoryLabel="The Beginning"
        memoryCaption="A chance encounter."
        outro="A small moment that would change everything."
      />

      <ChapterTransition title="A Promise" />

      <StoryChapter
        subtitle="Chapter Two"
        title="The Proposal"
        intro="A moment filled with love, hope, and forever."
        memoryLabel="The Question"
        memoryCaption="Will you marry me?"
        outro="A memory that became the start of a new chapter."
      />

      <ChapterTransition title="Together" />

      <StoryChapter
        subtitle="Chapter Three"
        title="The Celebration"
        intro="Family, friends, laughter, and memories."
        memoryLabel="Together"
        memoryCaption="Every smile tells a story."
        outro="A celebration of love shared by everyone."
      />

      <ChapterTransition title="The Day Arrives" />

      <StoryChapter
        subtitle="Chapter Four"
        title="Wedding Day"
        intro="The beginning of a beautiful new chapter."
        memoryLabel="The Vows"
        memoryCaption="Two hearts. One promise."
        outro="The day their forever officially began."
      />

      <ChapterTransition title="Forever" />

      <StoryChapter
        subtitle="Chapter Five"
        title="Forever Begins Here"
        intro="A lifetime of adventures together."
        memoryLabel="The Future"
        memoryCaption="Many memories still to come."
        outro="The story continues beyond this moment."
      />

      <WeddingTimeline />
    </>
  );
}