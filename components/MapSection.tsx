"use client";

import { ScrollReveal } from "./ScrollReveal";

const places = [
  { name: "Kashi Vishwanath Temple", type: "Temple" },
  { name: "Manikarnika Ghat", type: "Ghat" },
  { name: "Pita Maheshwar (Underground Shrine)", type: "Hidden" },
  { name: "Ramnagar Fort", type: "Heritage" },
  { name: "Sarnath", type: "Heritage" },
  { name: "Meer Ghat", type: "Ghat" },
  { name: "Panchganga Ghat", type: "Ghat" },
  { name: "Lolark Kund", type: "Sacred" },
];

const typeColors: Record<string, string> = {
  Temple: "bg-primary/20 text-primary",
  Ghat: "bg-accent/20 text-accent",
  Hidden: "bg-red-500/20 text-red-400",
  Heritage: "bg-emerald-500/20 text-emerald-400",
  Sacred: "bg-purple-500/20 text-purple-400",
};

export function MapSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Navigate the Sacred
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Map of Hidden Kashi</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Map container */}
          <ScrollReveal className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map of Kashi, Varanasi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28847.47177018085!2d83.0007!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </ScrollReveal>

          {/* Places legend */}
          <ScrollReveal delay={200} className="lg:w-80">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                Hidden Places to Discover
              </h3>
              <div className="flex flex-col gap-3">
                {places.map((place) => (
                  <div
                    key={place.name}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-3"
                  >
                    <span className="text-sm text-foreground/80">
                      {place.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${typeColors[place.type]}`}
                    >
                      {place.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
