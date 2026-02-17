"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const timelineEvents = [
  {
    era: "c. 1200 BCE",
    title: "The Birth of Kashi",
    description:
      "Kashi emerges as one of the earliest settlements along the sacred Ganges. Ancient texts speak of a city blessed by Shiva himself, destined to stand until the end of time.",
  },
  {
    era: "6th Century BCE",
    title: "The Age of Enlightenment",
    description:
      "Buddha delivers his first sermon at nearby Sarnath. Kashi becomes a center of learning, philosophy, and spiritual discourse, attracting seekers from across the known world.",
  },
  {
    era: "4th Century BCE",
    title: "Mauryan Empire",
    description:
      "Under the Mauryas, Kashi flourishes as a trading hub. Its silk weavers begin the tradition of Banarasi sarees that continues to this day, weaving gold into fabric and stories into thread.",
  },
  {
    era: "11th - 16th Century",
    title: "Invasions & Resilience",
    description:
      "Despite repeated invasions and the destruction of temples, the soul of Kashi never breaks. Temples are rebuilt, traditions endure, and the city proves that faith cannot be demolished.",
  },
  {
    era: "17th - 18th Century",
    title: "The Great Rebuilding",
    description:
      "Maharajas and devotees reconstruct Kashi's sacred landscape. The Kashi Vishwanath Temple rises again. The ghats take their current magnificent form, steps carved into eternity.",
  },
  {
    era: "Present Day",
    title: "The Eternal City Lives On",
    description:
      "Kashi remains one of the oldest continuously inhabited cities on Earth. Beneath the modern surface, ancient rhythms persist. The unexplored secrets still await those who dare to look deeper.",
  },
];

export function HistorySection() {
  return (
    <section
      id="history"
      className="relative bg-secondary py-24 md:py-32"
      aria-label="History of Kashi"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader />
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={event.era}
              event={event}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`mb-16 text-center transition-all duration-700 md:mb-20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
        Through the Ages
      </p>
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
        A City Older Than History
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-foreground/60 text-pretty">
        Kashi is not merely ancient. It is eternal. While empires rose and fell
        around it, this city on the banks of the Ganges has witnessed the entire
        arc of human civilization.
      </p>
    </div>
  );
}

function TimelineItem({
  event,
  index,
  isLeft,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
  isLeft: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`relative mb-12 flex items-start transition-all duration-700 last:mb-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline Dot */}
      <div
        className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2"
        aria-hidden="true"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>

      {/* Content */}
      <div
        className={`ml-12 w-full md:ml-0 md:w-1/2 ${
          isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
        }`}
      >
        <span className="mb-1 inline-block text-xs font-semibold tracking-widest uppercase text-accent">
          {event.era}
        </span>
        <h3 className="mb-2 font-serif text-xl font-bold text-foreground md:text-2xl">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/60 md:text-base">
          {event.description}
        </p>
      </div>
    </div>
  );
}
