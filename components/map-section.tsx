"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const hiddenPlaces = [
  {
    name: "Pita Maheshwar Shivling",
    type: "Underground Shrine",
    description: "An ancient Shivling hidden beneath the streets of Kashi",
  },
  {
    name: "Meer Ghat",
    type: "Secret Ghat",
    description: "A forgotten ghat with Sufi and Hindu heritage",
  },
  {
    name: "Bengali Tola",
    type: "Scholar's Quarter",
    description: "Ancient lanes housing 500-year-old Sanskrit schools",
  },
  {
    name: "Lolark Kund",
    type: "Sacred Pool",
    description: "An ancient sun-worshipping site with a sacred well",
  },
  {
    name: "Thatheri Bazaar",
    type: "UNESCO Heritage Market",
    description: "Traditional brass metalwork market, a living museum",
  },
  {
    name: "56 Ganesh Circuit",
    type: "Sacred Ring",
    description: "A protective ring of 56 temples around the city",
  },
];

export function MapSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="map"
      className="relative bg-secondary py-24 md:py-32"
      aria-label="Interactive map of hidden places in Kashi"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 md:mb-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Sacred Geography
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Map the Unseen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 text-pretty">
            The hidden treasures of Kashi are scattered across the city like
            stars in the night sky. Each pin on this map marks a place that most
            visitors will never find.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Map Container */}
          <div className="relative w-full overflow-hidden border border-border lg:w-2/3">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28843.86196082!2d83.0007!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Kashi (Varanasi) showing hidden sacred places"
              />
            </div>
          </div>

          {/* Places List */}
          <div className="flex w-full flex-col gap-4 lg:w-1/3">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Hidden Places to Discover
            </h3>
            {hiddenPlaces.map((place, index) => (
              <PlaceCard key={place.name} place={place} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceCard({
  place,
  index,
}: {
  place: (typeof hiddenPlaces)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group border border-border bg-card p-4 transition-all duration-500 hover:border-accent/50 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/50" aria-hidden="true">
          <div className="h-2 w-2 rounded-full bg-accent" />
        </div>
        <div>
          <p className="text-sm font-semibold text-card-foreground">
            {place.name}
          </p>
          <p className="text-xs font-medium text-accent">{place.type}</p>
          <p className="mt-1 text-xs text-card-foreground/50">
            {place.description}
          </p>
        </div>
      </div>
    </div>
  );
}
