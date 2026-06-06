const events = [
  {
    title: "First Meeting",
    year: "2022",
  },
  {
    title: "First Date",
    year: "2023",
  },
  {
    title: "Proposal",
    year: "2025",
  },
  {
    title: "Wedding",
    year: "2026",
  },
];

export default function WeddingTimeline() {
  return (
    <section className="py-32">
      <h2 className="text-center text-5xl mb-20">
        A Journey Worth Celebrating
      </h2>

      <div className="max-w-4xl mx-auto">
        {events.map((event) => (
          <div
            key={event.year}
            className="flex justify-between border-b border-white/10 py-8"
          >
            <span>{event.title}</span>
            <span>{event.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}