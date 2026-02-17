import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const articles: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    date: string;
    readTime: string;
    content: { heading: string; body: string }[];
  }
> = {
  "hidden-places-in-kashi": {
    title: "5 Hidden Places in Kashi No One Talks About",
    description:
      "Beyond the famous ghats and temples lie forgotten corners of Kashi that even most locals have never visited.",
    image: "/images/pita.jpeg",
    date: "January 15, 2026",
    readTime: "8 min read",
    content: [
      {
        heading: "1. The Underground Shivling of Pita Maheshwar",
        body: "Beneath the bustling streets of central Kashi lies one of its most sacred and least-visited shrines. The Pita Maheshwar Shivling sits in an underground chamber accessible only through a narrow stone staircase hidden behind an unremarkable wooden door. The chamber, believed to predate the current city by over a thousand years, houses a naturally occurring Shivling that devotees believe was installed by Lord Shiva himself. The air inside is cool and still, carrying the faint scent of centuries of offerings. Local priests say that at certain times of the year, the stone seems to glow with an inner light. Unlike the crowded temples above ground, this shrine sees barely a dozen visitors a day, preserving an atmosphere of profound solitude and devotion.",
      },
      {
        heading: "2. The Rooftop Temple Garden of Scindia Ghat",
        body: "While visitors photograph the partially submerged Shiva temple at Scindia Ghat from their boats, almost none discover the hidden rooftop garden temple complex accessible from the lanes above. A series of interconnected rooftops, maintained by a single family for generations, houses miniature shrines, medicinal herb gardens, and a meditation space with an unobstructed view of the Ganga. The family opens this space to sincere seekers but never advertises its existence. The collection includes rare plant species mentioned in Ayurvedic texts and stone carvings salvaged from temples destroyed during the Mughal invasions.",
      },
      {
        heading: "3. The Forgotten Well of Gyan Vapi",
        body: "The Gyan Vapi (Well of Knowledge) has become politically charged in recent years, but few know about the smaller, older well located three lanes away, which local tradition holds was the original sacred well before the famous one was constructed. This well, surrounded by ancient stone carvings that blur the line between Hindu and Buddhist iconography, is tended by a elderly caretaker who can recite its history going back 800 years from memory. The water is still considered sacred by local families who perform quiet rituals here away from public attention.",
      },
      {
        heading: "4. The Music Room of Kabir Chaura",
        body: "In the neighborhood associated with the mystic poet Kabir, there exists a small room above a weaver's workshop that has served as an informal music room for classical musicians for over two centuries. The room's acoustics are said to be perfect because of the particular arrangement of wooden beams and plaster walls. Even today, on certain evenings, masters of the Banaras gharana gather here to play ragas that are never performed publicly. The room has no sign, no schedule, and no admission. You must be invited, or simply fortunate enough to hear the music drifting through the narrow lanes and follow it to its source.",
      },
      {
        heading: "5. The Ash Garden at Harishchandra Ghat",
        body: "Behind the second cremation ghat of Kashi, away from the fires and ceremonies, there is a small enclosed garden where nothing has been planted by human hands. The plants that grow here emerge from the ashes of the cremated, and local tradition holds that the species of plant that grows from a person's ashes reveals something about their soul. Aghoris and tantric practitioners consider this garden one of the most spiritually potent places in all of Kashi. It is not marked on any map and is not visible from the ghat itself. To find it, you must walk through a narrow passage between two ancient buildings and through a door that appears to lead nowhere.",
      },
    ],
  },
  "secret-temples-beyond-vishwanath": {
    title: "Beyond Vishwanath: The Secret Temples",
    description:
      "Everyone knows Kashi Vishwanath. But the city holds over 2,000 temples, most hidden in plain sight.",
    image: "/images/narrow-lanes.jpg",
    date: "February 3, 2026",
    readTime: "10 min read",
    content: [
      {
        heading: "The Invisible Network",
        body: "Kashi's temple architecture follows a sacred geometry that most visitors never perceive. The city's over 2,000 temples are not randomly scattered but arranged in concentric rings and geometric patterns that mirror cosmic diagrams described in ancient Vastu Shastra texts. The innermost ring, centered around the Kashi Vishwanath Temple, contains the most powerful shrines. But the outer rings, less visited and less maintained, often hold the greatest mysteries. Walking these patterns intentionally, as pilgrims once did, is said to activate a spiritual energy that transcends what any single temple visit can offer.",
      },
      {
        heading: "Gauri Kedareshwar: Where Shiva Married Parvati",
        body: "Tucked away in a lane so narrow that two people cannot walk abreast, the Gauri Kedareshwar Temple is believed to be the exact spot where Lord Shiva married Goddess Parvati. The temple is architecturally unremarkable from outside, just another door in a wall of doors. But inside, the sanctum houses carvings of extraordinary delicacy that art historians date to the Gupta period, making them over 1,500 years old. The marriage scene carved on the inner wall is considered one of the finest examples of Gupta-era sculpture surviving anywhere in India, yet it receives a fraction of the attention given to museum pieces of lesser quality.",
      },
      {
        heading: "The 8 Bhairavs: Guardians of the City",
        body: "Eight temples dedicated to different forms of Bhairav, the fierce manifestation of Shiva, are positioned at cardinal and ordinal points around Kashi, forming a protective octagonal boundary. Each Bhairav guards a specific direction and is associated with particular powers. Kal Bhairav, the most famous, is the Kotwal (police chief) of Kashi; tradition holds that no one can settle in the city without his permission. The other seven, Ruru, Chanda, Asitanga, Unmatta, Kapala, Bhishana, and Samhara, are progressively harder to find, with the last requiring guidance from a local priest even to locate.",
      },
      {
        heading: "The 12 Jyotirlingas Within One City",
        body: "While India's 12 Jyotirlingas are scattered across the subcontinent from Somnath in the west to Mallikarjuna in the south, Kashi claims to contain replicas of all twelve within its boundaries. These replica shrines, established centuries ago for pilgrims who could not travel to the originals, are spread across the city in temples that range from the modestly maintained to the nearly forgotten. Completing a circuit of all twelve in a single day is a pilgrimage that even most devout locals rarely attempt, but those who do describe it as one of the most transformative spiritual experiences of their lives.",
      },
      {
        heading: "Adi Keshava: Where It All Began",
        body: "At the confluence of the Varana and Ganga rivers, far from the tourist center, stands the Adi Keshava Temple, believed by many scholars to be the oldest temple site in Kashi. The current structure is relatively modern, but excavations have revealed foundations dating back over two millennia. The temple is dedicated to Vishnu, a reminder that Kashi's spiritual significance predates its current association primarily with Shiva. The walk to Adi Keshava from the main ghats passes through some of the most authentic, least touristed neighborhoods in the city.",
      },
    ],
  },
  "midnight-soul-of-kashi": {
    title: "The Midnight Soul of Kashi",
    description:
      "When the last tourist boat returns and the ghats empty, a different city awakens.",
    image: "/images/manikarnika-ghat.jpg",
    date: "February 10, 2026",
    readTime: "12 min read",
    content: [
      {
        heading: "When the City Changes Its Face",
        body: "There is a moment, somewhere between 11 PM and midnight, when Kashi transforms completely. The chai stalls close their shutters. The boatmen tie their vessels and disappear into the lanes. The sound of temple bells fades, replaced by something else entirely: the crackling of eternal fires at Manikarnika, the distant chanting from unseen shrines, and the vast, breathing silence of the Ganga in darkness. This is the Kashi that existed before electricity, before tourism, before the modern world. This is the city that Tulsidas wrote about, that Kabir sang about, that Buddha contemplated. To know this Kashi, you must be willing to stay awake when every instinct tells you to sleep.",
      },
      {
        heading: "The Eternal Fires of Manikarnika",
        body: "The cremation fires at Manikarnika Ghat have not been extinguished for over 3,500 years, or so the tradition holds. At midnight, when the tourist gaze has retreated, these fires take on a different quality. The families performing last rites do so with an intimacy that daylight denies them. The Dom Raja's family, hereditary keepers of the sacred fire from which all cremation pyres are lit, tends their ancient charge with practiced ease. The flames create a bubble of light and warmth in the vast darkness, and the smoke rises in columns that seem to connect earth to sky. The Aghoris, who make the cremation grounds their home, begin their midnight practices in small groups, their mantras barely audible above the fire.",
      },
      {
        heading: "The Phantom Processions",
        body: "Local legend holds that the dead walk the lanes of Kashi at midnight, not as ghosts to be feared, but as souls in transit, processing through the city one final time before their liberation. The narrow lanes, which feel claustrophobic by day, become vast corridors at night, their walls seeming to breathe with centuries of accumulated prayer. Old-timers in Kashi speak matter-of-factly about encountering these phantom processions: a sudden chill in a warm lane, the distant sound of a wedding band playing a song no one recognizes, the glimpse of a figure in white turning a corner that leads to a dead end. Whether one believes in these encounters or not, walking Kashi's lanes at midnight is an experience that challenges the boundary between the rational and the mystical.",
      },
      {
        heading: "Predawn: The Sacred Hour",
        body: "The hours between 3 AM and 5 AM are called Brahma Muhurta in Hindu tradition, the hour of the Creator, when the veil between worlds is thinnest. In Kashi, this is when the city's most devout begin their day. The sound of water being drawn from wells, the murmur of Sanskrit verses recited from memory, the gentle clap of hands in prayer: these form the city's first music each day. The Ganga, which appeared black and infinite at midnight, begins to show the first gray hints of dawn. The boatmen emerge, their wooden oars creating rhythms that have accompanied every sunrise in Kashi since the first boat was placed on these waters. By the time the first golden light touches the temple spires, an entire cycle of midnight ritual and predawn devotion has already completed itself.",
      },
      {
        heading: "Why You Should Experience Midnight Kashi",
        body: "Most visitors to Kashi will never see the city after 10 PM. They will experience the beauty of the dawn Aarti, the spectacle of the evening Ganga Aarti, and the charm of the daytime lanes. These are genuine experiences. But they are only half the story. The midnight Kashi is not dangerous or frightening, though it requires a certain courage to embrace the unknown. It is, instead, the most honest version of the city. Without the performance of tourism, without the commerce of daytime, what remains is the raw spiritual energy that has drawn seekers to this spot on the Ganga for thousands of years. If you truly want to know Kashi, you must meet her at midnight.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Kashi - The Unexplored City`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Kashi
          </Link>
          <span className="font-serif text-lg font-bold text-accent">
            Kashi
          </span>
        </div>
      </div>

      {/* Hero */}
      <header className="relative pt-16">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative mx-auto -mt-24 max-w-3xl px-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <time>{article.date}</time>
            <span aria-hidden="true">|</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-foreground/60 text-pretty">
            {article.description}
          </p>
          <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
        </div>
      </header>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        {article.content.map((section, index) => (
          <section key={index} className="mb-12 last:mb-0">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
              {section.body}
            </p>
          </section>
        ))}

        {/* Article Footer */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg italic text-foreground/60">
              {"\""}The city reveals itself only to those who walk slowly and
              listen deeply.{"\""}
            </p>
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-6 py-3 text-sm font-semibold tracking-widest uppercase text-accent transition-all duration-500 hover:bg-accent hover:text-accent-foreground"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
