"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const blogPosts = [
  {
    slug: "hidden-places-in-kashi",
    title: "5 Hidden Places in Kashi No One Talks About",
    excerpt:
      "Beyond the famous ghats and temples lie forgotten corners of Kashi that even most locals have never visited. From underground shrines to rooftop sanctuaries, these are the city's best-kept secrets.",
    image: "/images/pita.jpeg",
    date: "January 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "secret-temples-beyond-vishwanath",
    title: "Beyond Vishwanath: The Secret Temples",
    excerpt:
      "Everyone knows Kashi Vishwanath. But the city holds over 2,000 temples, most hidden in plain sight within its ancient lanes. Discover the temples that guidebooks forgot.",
    image: "/images/kali.jpeg",
    date: "February 3, 2026",
    readTime: "10 min read",
  },
  {
    slug: "midnight-soul-of-kashi",
    title: "The Midnight Soul of Kashi",
    excerpt:
      "When the last tourist boat returns and the ghats empty of their daytime crowds, a different city awakens. The midnight rituals, the eternal fires, and the whispered prayers that make Kashi truly alive.",
    image: "/images/manik.jpeg",
    date: "February 10, 2026",
    readTime: "12 min read",
  },
];

export function BlogSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="blog"
      className="relative py-24 md:py-32"
      aria-label="Blog articles about Kashi"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 md:mb-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Stories & Insights
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Dispatches from the Eternal City
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 text-pretty">
            Deep explorations into the hidden layers of Kashi. Each article is a
            journey unto itself.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);

  return (
    <article
      ref={ref}
      className={`group flex flex-col overflow-hidden border border-border bg-card transition-all duration-700 hover:border-accent/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <time>{post.date}</time>
          <span aria-hidden="true">|</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mb-3 font-serif text-lg font-bold text-card-foreground transition-colors duration-300 group-hover:text-accent md:text-xl">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-card-foreground/60">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent/80"
        >
          Read Article
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
