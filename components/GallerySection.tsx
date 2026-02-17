"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const images = [
  { src: "/images/saree.jpeg", alt: "Banarasi saree weaving on a traditional handloom" },
  { src: "/images/dev .jpeg", alt: "Dev Deepawali festival with thousands of lamps on the ghats" },
  { src: "/images/boat.jpeg", alt: "Wooden boats on the Ganges at golden hour" },
  { src: "/images/kachori.jpeg", alt: "Traditional street food stall in Varanasi" },
  { src: "/images/ramnagar.jpeg", alt: "Ramnagar Fort on the banks of the Ganges" },
  { src: "/images/sarnath.jpeg", alt: "Sarnath Buddhist stupa near Varanasi" },
  { src: "/images/malai.jpeg", alt: "The winter delicacy of Malaiyo from Varanasi" },
];

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Visual Stories
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Gallery of Kashi</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 80}>
              <button
                onClick={() => setSelected(i)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 text-2xl text-foreground/70 transition-colors hover:text-foreground"
            aria-label="Close lightbox"
          >
            {"×"}
          </button>
          <div className="relative h-[80vh] w-[90vw] max-w-4xl">
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="rounded-xl object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
