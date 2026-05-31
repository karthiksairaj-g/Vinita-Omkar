import Hero from "@/components/ui/Hero";
import ScrollNarrative from "@/components/storytelling/ScrollNarrative";
import ScrollProgress from "@/components/storytelling/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <ScrollNarrative />
    </>

     
  );
}

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-midnight text-ivory p-10">
//       <h1 className="text-5xl font-bold text-rosegold">
//         Vinita & Omkar
//       </h1>

//       <p className="mt-4 text-champagne">
//         Luxury Wedding Experience
//       </p>
//     </main>
//   );
// }