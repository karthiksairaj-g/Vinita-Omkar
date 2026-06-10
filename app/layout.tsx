import "../styles/theme.css";
import "../styles/animations.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinita ❤️ Omkar | 15 March 2026",

  description:
    "A cinematic celebration of love, memories, and the beginning of forever.",

  openGraph: {
    title: "Vinita ❤️ Omkar",
    description:
      "A cinematic celebration of love, memories, and the beginning of forever.",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinita ❤️ Omkar",
    description:
      "A cinematic celebration of love, memories, and the beginning of forever.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}