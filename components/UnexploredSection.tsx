"use client";

import { ScrollReveal } from "./ScrollReveal";
import { ExploreCard } from "./ExploreCard";

const exploreItems = [
  {
    title: "Hidden Temples",
    image: "/images/pita.jpeg",
    shortDescription:
      "Beyond the famous Kashi Vishwanath lie hundreds of forgotten shrines — underground Shivlings, the 56 Ganesh temples, the 8 Bhairavs, and 12 Jyotirlingas hidden in narrow lanes.",
    fullDescription:
      "Pita Maheshwar Shivling sits in an underground shrine accessible only through a narrow staircase. The Gauri Kedareshwar Temple holds secrets of Shakti worship. Kaudiya Mata Temple is guarded by local families who have maintained it for centuries. Each of the 56 Ganesh temples marks a sacred boundary of the ancient city, forming a protective geometric mandala visible only from above.",
  },
  {
    title: "Secret Ghats",
    image: "/images/ghat.jpeg",
    shortDescription:
      "While millions know Dashashwamedh, few have walked the silent steps of Meer Ghat or witnessed the ancient rituals at Panchganga Ghat at sunrise.",
    fullDescription:
      "Meer Ghat is where the mystic poet Kabir is said to have meditated. Panchganga Ghat marks the mythical confluence of five sacred rivers. Harishchandra Ghat, older than Manikarnika, carries the legend of King Harishchandra who sold himself into servitude here. These ghats hold stories that most visitors walk past without ever knowing.",
  },
  {
    title: "Forgotten Alleys",
    image: "/images/gali.jpeg",
    shortDescription:
      "The labyrinthine lanes of Kashi — Vishwanath Gali, Bengali Tola, Nepali Khapra — hold centuries of stories within their crumbling walls and worn stone paths.",
    fullDescription:
      "Bengali Tola was once a hub of revolutionary thought during India's independence movement. Nepali Khapra houses a stunning wood-carved Nepali temple that most tourists never find. Kachori Gali has served the same recipes for over a hundred years. Every turn in these alleys reveals a doorway to another century.",
  },
  {
    title: "Sadhus & Aghoris",
    image: "/images/aghori.jpeg",
    shortDescription:
      "The Aghori ascetics of Kashi practice ancient Tantric traditions at the cremation grounds, seeking enlightenment through confronting humanity's deepest fears.",
    fullDescription:
      "The Aghori tradition in Kashi represents one of the most misunderstood spiritual paths. Living at the cremation grounds, they meditate on impermanence and seek to transcend the dualities of purity and impurity, life and death. Their practices, rooted in ancient Tantric philosophy, include midnight rituals that challenge every boundary of conventional spirituality.",
  },
  {
    title: "Midnight Aarti",
    image: "/images/midnight aarti.jpeg",
    shortDescription:
      "When the crowds depart and darkness falls, Kashi reveals its most intimate rituals — the midnight aartis that have been performed in whispered devotion for thousands of years.",
    fullDescription:
      "Unlike the grand public aarti at Dashashwamedh, the midnight ceremonies are intimate affairs. Small groups of priests perform rituals at lesser-known ghats, their chants merging with the sound of the Ganga. The experience is profoundly different from daytime worship — quieter, deeper, and infinitely more personal.",
  },
  {
    title: "Ancient Architecture",
    image: "/images/ramnagar.jpeg",
    shortDescription:
      "From the Alamgir Mosque built atop a Hindu temple to the crumbling grandeur of Ramnagar Fort, Kashi's architecture tells stories of creation, destruction, and rebirth.",
    fullDescription:
      "Ramnagar Fort, seat of the Maharaja of Kashi, houses a museum with rare astronomical clocks, vintage cars, and an armory spanning centuries. Sarnath's Dhamek Stupa stands where Buddha gave his first sermon. The Thatheri Bazaar, a UNESCO-recognized heritage market, preserves brass-working techniques unchanged since the Mughal era.",
  },
];

export function UnexploredSection() {
  return (
    <section id="unexplored" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Main Highlight
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">The Unexplored Kashi</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-foreground/70">
              Beyond the guidebooks and tourist trails lies a city of whispered
              legends, hidden shrines, and ancient secrets waiting to be
              discovered by those with the courage to look deeper.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exploreItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <ExploreCard {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
