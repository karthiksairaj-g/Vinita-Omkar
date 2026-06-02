"use client";

export default function MemoryArtifacts() {
  return (
    <div
      className="
        chapter-media
        mt-24
        grid
        gap-6
        md:grid-cols-2
      "
    >
      {/* Photo Memory Artifact */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-sm
          p-8
          min-h-[340px]
          shadow-[0_0_80px_rgba(255,215,180,0.08)]
          transition-all
          duration-500
          hover:border-rosegold/30
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-rosegold/5
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative h-full flex flex-col">
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-rosegold
              text-xs
            "
          >
            Memory Frame
          </p>

          <div
            className="
              mt-6
              flex-1
              rounded-[24px]
              border
              border-dashed
              border-white/10
              flex
              items-center
              justify-center
              text-neutral-500
              text-sm
              tracking-[0.2em]
              uppercase
            "
          >
            Future Photograph
          </div>

          <p
            className="
              mt-6
              text-2xl
              font-serif
              text-ivory
            "
          >
            Vinita & Omkar
          </p>
        </div>
      </div>

      {/* Quote Artifact */}
      <div
        className="
          group
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-sm
          p-10
          min-h-[340px]
          flex
          items-center
          shadow-[0_0_80px_rgba(255,215,180,0.08)]
          transition-all
          duration-500
          hover:border-rosegold/30
        "
      >
        <div>
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-rosegold
              text-xs
              mb-8
            "
          >
            Memory Quote
          </p>

          <blockquote
            className="
              text-3xl
              md:text-4xl
              font-serif
              text-ivory
              leading-relaxed
            "
          >
            “Every love story is beautiful,
            <br />
            but this one is our favorite.”
          </blockquote>

          <p
            className="
              mt-8
              text-neutral-400
              tracking-[0.2em]
              uppercase
              text-xs
            "
          >
            Future Memory
          </p>
        </div>
      </div>

      {/* Date / Location Artifact */}
      <div
        className="
          group
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-sm
          p-10
          min-h-[280px]
          shadow-[0_0_80px_rgba(255,215,180,0.08)]
          transition-all
          duration-500
          hover:border-rosegold/30
        "
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-rosegold
            text-xs
          "
        >
          Wedding Day
        </p>

        <div className="mt-10">
          <h3
            className="
              text-4xl
              md:text-5xl
              font-serif
              text-ivory
            "
          >
            15 March 2026
          </h3>

          <p
            className="
              mt-8
              text-neutral-300
              leading-8
              max-w-sm
            "
          >
            A memory waiting to become timeless.
          </p>
        </div>
      </div>

      {/* Voice Note Artifact */}
      <div
        className="
          group
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-sm
          p-10
          min-h-[280px]
          shadow-[0_0_80px_rgba(255,215,180,0.08)]
          transition-all
          duration-500
          hover:border-rosegold/30
        "
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-rosegold
            text-xs
          "
        >
          Voice Note
        </p>

        <div className="mt-10 flex items-center gap-5">
          <div
            className="
              h-14
              w-14
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              text-lg
              text-ivory
            "
          >
            ▶
          </div>

          <div>
            <p
              className="
                text-ivory
                text-lg
                font-medium
              "
            >
              00:00
            </p>

            <p
              className="
                mt-1
                text-neutral-400
              "
            >
              A message from the future.
            </p>
          </div>
        </div>

        <div
          className="
            mt-10
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          "
        />
      </div>
    </div>
  );
}