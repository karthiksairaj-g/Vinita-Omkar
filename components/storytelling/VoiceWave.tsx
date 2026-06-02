"use client";

export default function VoiceWave() {
  return (
    <div className="flex items-end gap-1 h-10">
      {[...Array(12)].map((_, index) => (
        <span
          key={index}
          className="
            voice-wave-bar
            block
            w-[4px]
            rounded-full
            bg-rosegold/70
          "
          style={{
            height: `${12 + ((index * 7) % 24)}px`,
            animationDelay: `${index * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}