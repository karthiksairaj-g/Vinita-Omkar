interface StoryChapterProps {
  title: string;
  subtitle?: string;
  content?: string;
}
export default function StoryChapter({
  title,
  subtitle,
  content,
}: StoryChapterProps) {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-8">
        {subtitle && (
          <p className="uppercase tracking-[0.3em] text-rosegold">
            {subtitle}
          </p>
        )}

        <h2 className="text-5xl mt-4">
          {title}
        </h2>

        {content && (
          <p className="mt-8 text-lg leading-8 text-neutral-300">
            {content}
          </p>
        )}
      </div>
    </section>
  );
}