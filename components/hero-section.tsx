"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

export function HeroSection() {

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-end overflow-hidden pb-32"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-end px-6 pb-24 text-center min-h-screen">
        <a
          href="#explore"
          className="group inline-flex items-center gap-2 rounded-none border border-white/30 bg-black/20 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-black animate-fade-in-up delay-400"
        >
          Explore the hidden places of Kashi
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-foreground/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
