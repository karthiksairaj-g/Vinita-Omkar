import TimelineEvent from "@/components/timeline/TimelineEvent";
import { timelineEvents } from "@/components/timeline/timelineData";

export default function WeddingTimeline() {
  return (
    <section
      className="
        relative
        pt-56 pb-40
        px-6
      "
    >
      {/* Intro */}

      <div
        className="
          max-w-3xl
          mx-auto
          text-center
          mb-32
        "
      >
        <p
          className="
            uppercase
            tracking-[0.4em]
            text-sm
            text-rose-300
            mb-6
          "
        >
          Our Journey
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-light
            mb-8
          "
        >
          A Journey Worth Celebrating
        </h2>

        <p
          className="
            text-lg
            text-stone-400
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          Every great love story is written one moment at a time. These are
          the milestones that shaped ours.
        </p>
      </div>

      {/* Timeline Container */}

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Spine */}

        <div
          className="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            -translate-x-1/2
            bg-gradient-to-b
           from-rose-300
via-rose-200
to-amber-100
          "
        />

        {timelineEvents.map((event, index) => (
          <TimelineEvent
            key={event.year}
            year={event.year}
            title={event.title}
            description={event.description}
            align={index % 2 === 0 ? "left" : "right"}
            isLast={index === timelineEvents.length - 1}
          />
        ))}
      </div>
    </section>
  );
}