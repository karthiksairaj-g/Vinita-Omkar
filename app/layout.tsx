import "../styles/theme.css";
import "../styles/animations.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinita ❤️ Omkar",
  description: "A celebration of love and memories.",
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