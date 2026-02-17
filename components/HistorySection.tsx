"use client";

import { ScrollReveal } from "./ScrollReveal";

const timeline = [
  {
    era: "3000 BCE",
    title: "Ancient Origins",
    description:
      "Kashi emerges as one of the first cities of human civilization, mentioned in the earliest Vedic texts as a center of learning, philosophy, and spiritual awakening along the sacred Ganges.",
  },
  {
    era: "6th Century BCE",
    title: "Age of Enlightenment",
    description:
      "Lord Buddha delivers his first sermon at Sarnath, just miles from Kashi. The city becomes a crossroads of Hinduism, Buddhism, and Jainism, nurturing seekers from across the subcontinent.",
  },
  {
    era: "11th–16th Century",
    title: "Trials & Resilience",
    description:
      "Repeated invasions test the spirit of Kashi. Temples are destroyed and rebuilt, yet the city's soul remains unbroken. Its people preserve rituals, knowledge, and traditions through oral and written lineages.",
  },
  {
    era: "18th Century",
    title: "Maratha & Rajput Revival",
    description:
      "The Maratha and Rajput kingdoms invest in rebuilding Kashi's sacred landscape. Magnificent ghats rise along the Ganges, and the city is reborn as the spiritual capital of India.",
  },
  {
    era: "Present Day",
    title: "A Living Heritage",
    description:
      "Kashi continues to breathe the same air of devotion and mystery it has for millennia. Beneath its modern surface lie layers of history waiting to be uncovered by those who dare to look deeper.",
  },
];

export function HistorySection() {
  return (
    <section id="history" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Through the Ages
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">
                Five Thousand Years of Living History
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-12 md:gap-16">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.era} delay={i * 100}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-start md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="mb-1 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {item.era}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground/70">
                      {item.description}
                    </p>
                  </div>

                  {/* Center dot - desktop */}
                  <div className="hidden items-start justify-center md:flex md:w-8">
                    <div className="mt-2 h-4 w-4 rounded-full border-2 border-accent bg-background" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
