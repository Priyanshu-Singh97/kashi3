"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      className="relative bg-secondary py-24 md:py-32"
      aria-label="About this project"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 md:mb-20 ${headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Our Purpose
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Why This Project Exists
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`flex flex-col gap-12 transition-all duration-700 lg:flex-row lg:items-center lg:gap-16 ${contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="relative aspect-square w-full overflow-hidden lg:w-2/5">
            <Image
              src="/images/boat.jpeg"
              alt="A solitary boat on the Ganges at dawn, representing the contemplative spirit of Kashi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              loading="lazy"
            />
          </div>

          <div className="flex w-full flex-col gap-6 lg:w-3/5">
            <p className="text-lg leading-relaxed text-foreground/80">
              Kashi is not a destination. It is a{" "}
              <span className="font-serif italic text-accent">revelation</span>.
            </p>
            <p className="leading-relaxed text-foreground/60">
              Every year, millions visit Varanasi. They see the Ganga Aarti,
              visit the Kashi Vishwanath Temple, take a boat ride at dawn, and
              leave believing they have seen the city. They have not. Beneath the
              surface that tourists photograph lies a world of hidden shrines,
              forgotten rituals, secret lanes, and spiritual practices that have
              remained unchanged for thousands of years.
            </p>
            <p className="leading-relaxed text-foreground/60">
              This project was born from a simple conviction: that the most
              profound experiences in Kashi are the ones no guidebook mentions.
              We seek to document the undocumented, to illuminate what has
              remained in shadow, and to invite conscious explorers to look
              beyond the obvious.
            </p>
            <p className="leading-relaxed text-foreground/60">
              We do not want to turn these hidden places into tourist
              attractions. We want to inspire a different kind of traveler: one
              who walks slowly, observes deeply, and understands that in Kashi,
              every stone has a story and every silence holds a secret.
            </p>
            <div className="mt-4 border-l-2 border-accent pl-6">
              <p className="font-serif text-lg italic text-foreground/80">
                {"\""}Explore with reverence. Discover with humility. Leave with
                wonder.{"\""}
              </p>
              <p className="mt-2 text-sm text-accent">
                - The Kashi Unexplored Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
