import StoryChapter from './StoryChapter';
import WeddingTimeline from "./WeddingTimeline";
export default function ScrollNarrative() {
  return (
    <>
      <StoryChapter
        subtitle="Chapter One"
        title="How It Began"
        content="Two paths crossed and a story began."
      />

      <StoryChapter
        subtitle="Chapter Two"
        title="The Proposal"
        content="A moment filled with love, hope, and forever."
      />

      <StoryChapter
        subtitle="Chapter Three"
        title="The Celebration"
        content="Family, friends, laughter, and memories."
      />

      <StoryChapter
        subtitle="Chapter Four"
        title="Wedding Day"
        content="The beginning of a beautiful new chapter."
      />

      <StoryChapter
        subtitle="Chapter Five"
        title="Forever Begins Here"
        content="A lifetime of adventures together."
      />

      <WeddingTimeline />
    </>
  );
}