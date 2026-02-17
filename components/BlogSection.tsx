"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const articles = [
  {
    title: "5 Hidden Places in Kashi No One Talks About",
    excerpt:
      "Beyond the well-trodden paths lie forgotten shrines, underground temples, and silent ghats that hold the true essence of this ancient city. Discover five places that even most locals have never visited.",
    image: "/images/pita.jpeg",
    date: "December 2025",
    readTime: "8 min read",
  },
  {
    title: "Beyond Vishwanath: The Secret Temples",
    excerpt:
      "The 56 Ganesh temples form a sacred geometric boundary around the old city. The 8 Bhairavs guard Kashi from eight directions. These temple networks reveal a city designed as a cosmic mandala.",
    image: "https://placehold.co/800x400/1a1a1a/FFF?text=Ancient+Architecture",
    date: "November 2025",
    readTime: "12 min read",
  },
  {
    title: "The Midnight Soul of Kashi",
    excerpt:
      "When darkness falls and tourists retreat to their hotels, Kashi awakens to its most intimate self. Midnight aartis, Aghori meditations, and whispered prayers reveal a city that never truly sleeps.",
    image: "public/images/midnight aarti.jpeg",
    date: "October 2025",
    readTime: "10 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Stories & Insights
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">From the Blog</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, i) => (
            <ScrollReveal key={article.title} delay={i * 150}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-foreground/60">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    Read Article
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
