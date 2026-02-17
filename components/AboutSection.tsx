"use client";

import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            Our Purpose
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">Why This Project Exists</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-foreground/70">
            <p>
              Kashi is not a destination. It is a revelation. Millions visit
              Varanasi every year, yet most only scratch the surface — the
              famous temples, the crowded ghats, the postcard sunrises.
            </p>
            <p>
              This project was born from a deep love for the city that lies
              beneath the surface. The forgotten lanes where poets once
              debated philosophy. The underground shrines where devotion has
              been whispered for centuries. The rituals performed at midnight
              when no camera is watching.
            </p>
            <p>
              We invite you to explore Kashi not as a tourist, but as a
              seeker. Walk slowly. Listen to the silence between the temple
              bells. Let the city reveal its secrets to you in its own time.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <p className="mt-8 font-serif text-xl italic text-accent">
            {"\""}Kashi is older than history, older than tradition, older even
            than legend, and looks twice as old as all of them put together.{"\""}{" "}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            — Mark Twain
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
