export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback overlay (optional, keeps text readable if video fails) */}
        <div className="absolute inset-0 bg-background/0" />
      </div>

      {/* Dark gradient overlay - Lightened for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/60" />

      {/* Content */}
      <div className="absolute bottom-32 left-0 right-0 z-10 mx-auto max-w-4xl px-6 text-center">
        <a
          href="#unexplored"
          className="inline-block rounded-full border-2 border-accent bg-accent/10 px-8 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          Explore Hidden Kashi
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-foreground/50">
          Scroll
        </span>
        <div className="h-10 w-5 rounded-full border-2 border-foreground/30">
          <div className="mx-auto mt-1.5 h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
