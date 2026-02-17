"use client";

import { ScrollReveal } from "./ScrollReveal";

const pillars = [
  {
    title: "The Sacred Ganga",
    description:
      "The river Ganga is not merely water in Kashi — she is a living goddess. Every drop carries the promise of liberation. Pilgrims travel thousands of miles to immerse their prayers in her timeless current, believing that her touch dissolves the cycle of rebirth.",
  },
  {
    title: "Ritual Life",
    description:
      "From the first aarti at dawn to the last flame at midnight, Kashi breathes ritual. Every ghat, every temple, every narrow lane pulses with ceremonies that have remained unchanged for millennia — a living, unbroken thread connecting the present to the eternal.",
  },
  {
    title: "The Philosophy of Death",
    description:
      "In Kashi, death is not feared — it is celebrated. To die here is to achieve moksha, liberation from the cycle of rebirth. The cremation fires at Manikarnika Ghat have burned continuously for over 5,000 years, a testament to this profound belief.",
  },
];

export function CulturalSection() {
  return (
    <section id="cultural" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              The Soul of Kashi
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">
                Cultural & Spiritual Significance
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-foreground/70">
              Kashi is not just a city. It is a state of consciousness — the
              axis mundi of Hindu spiritual geography, where the divine
              intersects with the mortal at every step.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8 md:flex-row">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 150} className="flex-1">
              <div className="group h-full rounded-2xl border border-border bg-card/50 p-8 transition-all duration-500 hover:border-accent/30 hover:bg-card">
                <div className="mb-4 h-1 w-12 rounded-full bg-accent transition-all duration-500 group-hover:w-20" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
