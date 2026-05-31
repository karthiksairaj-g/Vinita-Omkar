"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ScrollScene({
  children,
}: Props) {
  return (
    <section className="relative min-h-screen">
      {children}
    </section>
  );
}