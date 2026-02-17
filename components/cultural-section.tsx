"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    title: "The Sacred Ganges",
    description:
      "The Ganga is not merely a river here. She is a mother, a goddess, a gateway between worlds. To bathe in her waters at Kashi is to wash away lifetimes of karma. To die at her banks is to achieve moksha.",
  },
  {
    title: "City of Shiva",
    description:
      "Kashi is Shiva's eternal abode. Legend says when Shiva and Parvati sought a place to call home, they chose Kashi above all creation. The city rests on Shiva's trident, existing outside the cycle of creation and destruction.",
  },
  {
    title: "The Ritual Life",
    description:
      "Every dawn, thousands gather at the ghats for prayer. Every dusk, the Ganga Aarti illuminates the riverfront with devotion. Between these bookends, an entire universe of ritual unfolds, from births to cremations, from chanting to silence.",
  },
];

export function CulturalSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal(0.15);

  return (
    <section
      id="cultural"
      className="relative py-24 md:py-32"
      aria-label="Cultural and spiritual significance of Kashi"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 md:mb-20 ${headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
            The Spiritual Heart
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Where Heaven Meets Earth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 text-pretty">
            Kashi is the spiritual capital of India. It is said that even the
            gods descend to its ghats to seek blessings. Here, every stone is a
            scripture and every lane a pilgrimage.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative aspect-[3/4] w-full overflow-hidden lg:w-1/2 transition-all duration-700 ${imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
              }`}
          >
            <Image
              src="/images/midnight aarti.jpeg"
              alt="Grand Ganga Aarti ceremony at the ghats of Varanasi with priests performing sacred fire rituals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-lg text-foreground/90 italic">
                {"\""}To die in Kashi is to be liberated. To live in Kashi is to
                witness eternity.{"\""}
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="flex w-full flex-col gap-10 lg:w-1/2">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`border-l-2 border-accent/30 pl-6 transition-all duration-700 hover:border-accent ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="mb-2 font-serif text-xl font-bold text-foreground md:text-2xl">
        {pillar.title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/60 md:text-base">
        {pillar.description}
      </p>
    </div>
  );
}
