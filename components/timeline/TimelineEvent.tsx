type TimelineEventProps = {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  align: "left" | "right";
};

export default function TimelineEvent({
  year,
  title,
  description,
  isLast = false,
  align,
}: TimelineEventProps) {
  return (
    <div
      className={`
        relative
        grid
        md:grid-cols-2
        gap-12
        items-center
        py-24
      `}
    >
      {/* Left Side */}
      <div
        className={`
          ${align === "left" ? "md:text-right" : "md:order-2"}
        `}
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-rose-300
            mb-4
          "
        >
          {year}
        </p>

        <h3
          className="
            text-4xl
            md:text-5xl
            font-light
            mb-6
          "
        >
          {title}
        </h3>

        <p
          className="
            text-stone-400
            leading-relaxed
            max-w-lg
            mx-auto
          "
        >
          {description}
        </p>
      </div>

      {/* Empty Side */}
      <div />

      {/* Timeline Marker */}
      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {isLast ? (
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                bg-rose-300/30
                blur-2xl
                scale-[2.5]
                rounded-full
              "
            />

            <div
              className="
                relative
                h-6
                w-6
                rounded-full
                bg-rose-200
              "
            />
          </div>
        ) : (
          <div
            className="
              h-5
              w-5
              rounded-full
              bg-rose-300
            "
          />
        )}
      </div>
    </div>
  );
}