import { useState } from "react";
import { ArrowRight, Check, Hash, Network, X } from "lucide-react";
import { CTA3 } from "@/components/blocks/cta-3";
import { Contact1 } from "@/components/blocks/contact-1";
import { FAQ2 } from "@/components/blocks/faq-2";

const logos = ["Solana", "Kraken", "MEXC", "Avantis", "Apechain", "Limitless"];

const niches = [
  "Prediction Markets",
  "Trading",
  "DeFi",
  "Stablecoins",
  "AI",
  "NFTs",
];

const creatorValues: Record<string, string> = {
  "Prediction Markets": "5,544",
  Trading: "11,820",
  DeFi: "8,406",
  Stablecoins: "3,918",
  AI: "6,702",
  NFTs: "2,844",
};

const faqs = [
  {
    question: "What's the minimum campaign budget?",
    answer:
      "We work with campaigns starting from $5,000. Below that, the optimization gains do not outweigh the coordination overhead.",
  },
  {
    question: "How long does it take to launch a campaign?",
    answer:
      "Typically 1-2 weeks from first call to first KOL posts. Most of that time is creator outreach and negotiation, which we handle.",
  },
  {
    question: "Do you work with creators outside Crypto Twitter?",
    answer:
      "Right now, no. Our audience graph is mapped specifically for Crypto Twitter. Other platforms are on the roadmap.",
  },
  {
    question: "What if my niche isn't on the list?",
    answer:
      "We've mapped 60+ niches. If yours isn't covered, the call is the fastest way to check. We add new niches regularly.",
  },
  {
    question: "How do you charge?",
    answer:
      "Flat percentage of campaign budget. No hidden markup on creator fees. Pricing details on the call.",
  },
  {
    question: "Can I see real campaign results before signing?",
    answer:
      "Yes, we'll walk you through a recent campaign on the call, with the actual numbers and creator lineup.",
  },
  {
    question: "Who runs my campaign?",
    answer:
      "Direct contact with the founder for the first campaign. After that, dedicated campaign manager plus our optimization team.",
  },
];

function ActionLink({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-200 hover:scale-[1.02] ${
        variant === "primary"
          ? "bg-[#F7D133] text-neutral-950 hover:bg-[#ffe45c]"
          : "border border-neutral-700 text-white hover:bg-neutral-900"
      }`}
      href={href}
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}

function Section({
  children,
  eyebrow,
  id,
  title,
  copy,
}: {
  children: React.ReactNode;
  eyebrow: string;
  id: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <section className="bg-neutral-950 px-4 py-10 text-white sm:px-6 lg:px-8" id={id}>
      <div className="mx-auto max-w-[1280px]">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            {copy}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function DataTile({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "accent";
}) {
  return (
    <div
      className={`rounded-3xl border p-5 ${
        tone === "accent"
          ? "border-[#F7D133]/40 bg-[#F7D133]/10 text-[#F7D133]"
          : "border-neutral-800 bg-neutral-900/70 text-white"
      }`}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-neutral-950 px-4 pb-10 pt-5 text-white sm:px-6 lg:px-8" id="hero">
      <div className="mx-auto max-w-[1280px]">
        <nav className="flex flex-wrap items-center justify-between gap-4 py-4">
          <a className="text-xl font-medium tracking-tight" href="#hero">
            Wallchain
          </a>
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-neutral-400">
            <a className="hover:text-white" href="#niche-followers">
              niche followers
            </a>
            <a className="hover:text-white" href="#call">
              Plan Campaign
            </a>
            <a className="hover:text-white" href="#creator-network">
              Creator Network
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <ActionLink href="#call" variant="secondary">
              Analyze my campaign
            </ActionLink>
            <ActionLink href="#call">Book a call</ActionLink>
          </div>
        </nav>

        <div className="grid items-center gap-7 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Get <span className="text-[#F7D133]">3-6x more reach</span> for
              half the cost.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
              Most KOL campaigns pay multiple creators to reach the same users.
              We map 3.3M accounts on Crypto Twitter and fix that.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink href="#call">Analyze my campaign</ActionLink>
              <ActionLink href="#call" variant="secondary">
                Book a call
              </ActionLink>
            </div>
            <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              60+ niches · 150K KOLs scored · Real-niche reach modeled
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
            <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Trusted by
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {logos.map((logo) => (
                <div
                  className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-3 text-center text-sm font-medium text-neutral-200"
                  key={logo}
                >
                  {logo}
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-3xl border border-[#F7D133]/40 bg-[#F7D133]/10 p-5 text-base font-medium leading-7 text-white">
              Backed by Alliance DAO · Built by engineers from Google, Meta, Y
              Combinator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  return (
    <Section
      eyebrow="Campaign report"
      id="pain"
      title="You can spend $50K and still miss your audience."
    >
      <div className="mt-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <DataTile>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-neutral-500">Creators</p>
              <p className="mt-2 text-3xl font-medium">10</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Impressions</p>
              <p className="mt-2 text-3xl font-medium">240K</p>
            </div>
          </div>
          <p className="my-5 text-center font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
            - but -
          </p>
          <div className="grid gap-3">
            {["61% audience overlap", "72% outside target niche", "random frequency distribution"].map(
              (item) => (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-100"
                  key={item}
                >
                  <X className="size-4 text-red-300" />
                  {item}
                </div>
              ),
            )}
          </div>
        </DataTile>
        <DataTile tone="accent">
          <p className="text-2xl font-medium leading-snug text-white">
            Most teams don't know which part of their impressions actually
            mattered.
          </p>
        </DataTile>
      </div>
    </Section>
  );
}

function NicheFollowers() {
  return (
    <Section
      eyebrow="Niche followers"
      id="niche-followers"
      title="Follower count doesn't tell you who will convert."
    >
      <div className="mt-7 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <DataTile>
          <p className="text-sm text-neutral-500">That is what others see</p>
          <p className="mt-2 text-4xl font-medium">120K</p>
          <p className="text-neutral-400">total followers</p>
          <div className="my-5 h-px bg-neutral-800" />
          <p className="text-sm text-neutral-500">Relevant to your campaign</p>
          <p className="mt-2 text-4xl font-medium text-[#F7D133]">584</p>
          <p className="text-neutral-400">relevant to your campaign</p>
          <p className="mt-2 text-sm text-neutral-500">(niche followers)</p>
        </DataTile>
        <DataTile>
          <h3 className="text-2xl font-medium">
            How we know who is actually in your niche:
          </h3>
          <div className="mt-5 grid gap-3">
            <SignalRow label="User A follows" nodes={["Polymarket", "Random crypto user"]} />
            <SignalRow
              label="User B follows"
              nodes={["Polymarket", "Kalshi", "Real prediction markets buyer."]}
              active
            />
          </div>
          <p className="mt-5 rounded-3xl border border-[#F7D133]/40 bg-[#F7D133]/10 p-4 text-sm leading-6 text-neutral-200">
            We mapped 3.3M Crypto Twitter accounts so you don't have to.
          </p>
        </DataTile>
      </div>
    </Section>
  );
}

function SignalRow({
  active,
  label,
  nodes,
}: {
  active?: boolean;
  label: string;
  nodes: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {nodes.map((node, index) => (
          <span
            className={`rounded-full border px-3 py-2 text-sm ${
              active && index === nodes.length - 1
                ? "border-[#F7D133]/50 bg-[#F7D133]/10 text-[#F7D133]"
                : "border-neutral-700 bg-neutral-900 text-neutral-200"
            }`}
            key={node}
          >
            {node}
          </span>
        ))}
      </div>
    </div>
  );
}

function CreatorNetwork() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);

  return (
    <Section
      copy="Switch the niche. The same creator performs differently."
      eyebrow="Creator network"
      id="creator-network"
      title="Same creator. Different value."
    >
      <div className="mt-6 flex flex-wrap gap-2">
        {niches.map((niche) => (
          <button
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              selectedNiche === niche
                ? "border-[#F7D133]/60 bg-[#F7D133]/10 text-[#F7D133]"
                : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600"
            }`}
            key={niche}
            onClick={() => setSelectedNiche(niche)}
            type="button"
          >
            {niche}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.7fr_1fr_0.7fr]">
        <CreatorCard handle="@sample_alpha" subline="Sample network" />
        <article className="rounded-3xl border border-[#F7D133]/40 bg-[#F7D133]/10 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#F7D133]">
                @creator_demo
              </p>
              <h3 className="mt-2 text-2xl font-medium text-white">
                120K followers
              </h3>
            </div>
            <Network className="size-9 text-[#F7D133]" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <DataTile>
              <p className="text-sm text-neutral-500">Relevant audience</p>
              <p className="mt-2 text-4xl font-medium text-[#F7D133]">
                {creatorValues[selectedNiche]}
              </p>
            </DataTile>
            <DataTile>
              <p className="text-sm text-neutral-500">Niche</p>
              <p className="mt-2 text-2xl font-medium">{selectedNiche}</p>
              <p className="mt-2 text-sm text-neutral-500">Sample data</p>
            </DataTile>
          </div>
          <p className="mt-5 text-sm text-neutral-400">
            Demo with sample data. Real creator data shown on call.
          </p>
        </article>
        <CreatorCard handle="@sample_beta" subline="Sample network" />
      </div>
      <div className="mt-6">
        <ActionLink href="#call">See top creators in my niche</ActionLink>
      </div>
    </Section>
  );
}

function CreatorCard({ handle, subline }: { handle: string; subline: string }) {
  return (
    <article className="flex min-h-56 flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5">
      <Hash className="size-8 text-neutral-600" />
      <div>
        <p className="text-lg font-medium">{handle}</p>
        <p className="mt-1 text-sm text-neutral-500">{subline}</p>
      </div>
    </article>
  );
}

function BridgeCTA() {
  return (
    <Section
      copy="Across hundreds of campaigns, we've turned budgets into right creator lineups. We'll do the same for yours."
      eyebrow="Let's run your numbers"
      id="run-your-numbers"
      title="$6.9M already paid to creators"
    >
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <ActionLink href="#call">Set this up for me</ActionLink>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          15-minute call. Real campaign data on the screen.
        </p>
      </div>
    </Section>
  );
}

function ProofBand() {
  const stats = [
    ["3.7x", "more relevant audience"],
    ["2x", "cheaper per niche audience member"],
    ["60+", "mapped niches"],
    ["3.3M", "mapped crypto accounts"],
  ];

  return (
    <Section
      eyebrow="Numbers from real campaigns"
      id="proof"
      title="Optimization changes what the same budget can buy."
    >
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <DataTile key={label}>
            <p className="text-4xl font-medium text-[#F7D133]">{value}</p>
            <p className="mt-2 text-sm text-neutral-400">{label}</p>
          </DataTile>
        ))}
      </div>
      <div className="mt-6">
        <ActionLink href="#call" variant="secondary">
          Read the full Prediction Markets analysis
        </ActionLink>
      </div>
    </Section>
  );
}

function Testimonials() {
  const quotes = [
    ["We stopped paying for the same audience twice.", "Growth lead"],
    [
      "The lineup finally matched the niche, not just the follower count.",
      "Marketing team",
    ],
    ["The calculator made the spend tradeoff obvious in seconds.", "Founder"],
  ];

  return (
    <Section
      eyebrow="Testimonials"
      id="testimonials"
      title="What teams notice after the first campaign."
    >
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {quotes.map(([quote, role]) => (
          <article
            className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5"
            key={quote}
          >
            <Check className="size-5 text-[#F7D133]" />
            <p className="mt-4 text-xl font-medium leading-snug">"{quote}"</p>
            <p className="mt-5 text-sm text-neutral-500">{role}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Pain />
      <NicheFollowers />
      <CreatorNetwork />
      <BridgeCTA />
      <ProofBand />
      <Testimonials />
      <Contact1 />
      <CTA3 />
      <FAQ2 faqs={faqs} />
    </main>
  );
}
