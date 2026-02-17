"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const galleryImages = [
  {
    src: "/images/ghat.jpeg",
    alt: "Panoramic sunrise over the ancient ghats of Kashi",
    title: "Dawn at the Ghats",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/manik.jpeg",
    alt: "Sacred cremation fires at Manikarnika Ghat",
    title: "Manikarnika Ghat",
    span: "",
  },
  {
    src: "/images/pita.jpeg",
    alt: "Hidden temple in the narrow lanes of Varanasi",
    title: "Hidden Shrine",
    span: "",
  },
  {
    src: "/images/gali.jpeg",
    alt: "Ancient narrow lanes of Kashi",
    title: "The Ancient Galis",
    span: "",
  },
  {
    src: "/images/saree.jpeg",
    alt: "Traditional Banarasi silk saree weaving",
    title: "Weaving Heritage",
    span: "",
  },
  {
    src: "/images/dev-deepawali.jpeg",
    alt: "Dev Deepawali festival with thousands of lamps",
    title: "Dev Deepawali",
    span: "md:col-span-2",
  },
  {
    src: "/images/aghori.jpeg",
    alt: "Aghori sadhu at the ghats of Varanasi",
    title: "The Aghori Path",
    span: "",
  },
  {
    src: "/images/boat.jpeg",
    alt: "Morning boat ride on the Ganges",
    title: "Morning on the Ganga",
    span: "",
  },
  {
    src: "/images/ramnagar.jpeg",
    alt: "Historic Ramnagar Fort on the Ganges",
    title: "Ramnagar Fort",
    span: "",
  },
  {
    src: "/images/malai.jpeg",
    alt: "Traditional Malaiyo dessert from Varanasi",
    title: "Taste of Kashi",
    span: "",
  },
  {
    src: "/images/sarnath.jpeg",
    alt: "Ancient Dhamek Stupa at Sarnath",
    title: "Sarnath",
    span: "",
  },
  {
    src: "/images/midnight-aarti.jpeg",
    alt: "Sacred Ganga Aarti ceremony at night",
    title: "Ganga Aarti",
    span: "",
  },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32"
      aria-label="Visual gallery of Kashi"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 md:mb-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Visual Journey
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Glimpses of the Eternal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 text-pretty">
            Each frame captures a moment that has repeated itself for millennia.
            These are not photographs. They are windows into eternity.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, index) => (
            <GalleryItem
              key={img.src}
              image={img}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === 0
                  ? galleryImages.length - 1
                  : lightboxIndex - 1
              );
            }}
            aria-label="Previous image"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            className="relative max-h-[80vh] max-w-[90vw] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center font-serif text-lg text-foreground/80">
              {galleryImages[lightboxIndex].title}
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === galleryImages.length - 1
                  ? 0
                  : lightboxIndex + 1
              );
            }}
            aria-label="Next image"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${image.span} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onClick}
        className="group relative aspect-square overflow-hidden cursor-pointer w-full h-full"
        aria-label={`View ${image.title}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 transition-all duration-500 group-hover:bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="font-serif text-sm font-bold text-foreground md:text-lg">
            {image.title}
          </p>
        </div>
      </button>
    </div>
  );
}
