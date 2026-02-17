"use client";

import { useState } from "react";
import Image from "next/image";

interface ExploreCardProps {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

export function ExploreCard({
  title,
  image,
  shortDescription,
  fullDescription,
}: ExploreCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 font-serif text-xl font-bold text-foreground">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="leading-relaxed text-foreground/70">{shortDescription}</p>

        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="leading-relaxed text-foreground/60">
            {fullDescription}
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
          aria-expanded={expanded}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
