import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Hash, Menu, Network, X } from "lucide-react";
import { CTA3 } from "@/components/blocks/cta-3";
import { Contact1 } from "@/components/blocks/contact-1";
import { FAQ2 } from "@/components/blocks/faq-2";

const wallchainLogoUrl = new URL("./assets/wallchain-logo.svg", import.meta.url).href;

const partnerLogos = [
  {
    name: "Solana",
    src: new URL("./assets/partners/solana.svg", import.meta.url).href,
  },
  {
    name: "Kraken",
    src: new URL("./assets/partners/kraken.svg", import.meta.url).href,
  },
  {
    name: "MEXC",
    src: new URL("./assets/partners/mexc.svg", import.meta.url).href,
  },
  {
    name: "Avantis",
    src: new URL("./assets/partners/avantis.svg", import.meta.url).href,
  },
  {
    name: "Apechain",
    src: new URL("./assets/partners/apechain.svg", import.meta.url).href,
  },
  {
    name: "Limitless",
    src: new URL("./assets/partners/limitless.svg", import.meta.url).href,
  },
];

const navigationLinks = [
  { label: "How it works", href: "#niche-followers" },
  { label: "Campaign planner", href: "#plan-campaign" },
  { label: "Results", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

const heroBullets = [
  "60+ niches",
  "150K KOLs scored",
  "Real-niche reach modeled",
];

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
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-medium transition duration-200 hover:scale-[1.02] ${
        variant === "primary"
          ? "yellow-cta"
          : "outline-cta"
      }`}
      href={href}
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}

function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.nav
          animate={{ opacity: 1, y: 0 }}
          className={`relative flex items-center justify-between py-1.5 transition-[background-color,backdrop-filter,border-color,box-shadow,border-radius,padding-left,padding-right] duration-300 ease-out ${
            scrolled
              ? "rounded-2xl border border-neutral-800 bg-neutral-950/70 pl-4 pr-1.5 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "rounded-none border border-transparent bg-transparent px-0"
          }`}
          initial={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a aria-label="Wallchain home" className="flex items-center" href="#hero">
            <img
              alt="Wallchain"
              className="h-[28px] w-auto object-contain"
              decoding="async"
              src={wallchainLogoUrl}
            />
          </a>

          <div className="hidden items-center gap-8 px-4 md:flex">
            {navigationLinks.map((link) => (
              <a
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <a
              className={`outline-cta hidden items-center gap-2 px-5 py-2.5 text-sm font-medium transition duration-200 sm:inline-flex ${
                scrolled
                  ? "border-transparent"
                  : "border-neutral-700 hover:border-neutral-500"
              }`}
              href="#plan-campaign"
            >
              Analyze my campaign
              <ArrowRight className="size-4" />
            </a>
            <a
              className="yellow-cta hidden items-center gap-2 px-5 py-2.5 text-sm font-medium transition duration-200 sm:inline-flex"
              href="#call"
            >
              Book a call
              <ArrowRight className="size-4" />
            </a>
            <button
              aria-label="Toggle menu"
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-neutral-700 text-white md:hidden"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-neutral-800 bg-neutral-950/85 p-4 backdrop-blur-xl md:hidden"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {navigationLinks.map((link) => (
                <a
                  className="py-2 text-sm font-medium text-neutral-200"
                  href={link.href}
                  key={link.label}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="yellow-cta mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium"
                href="#call"
                onClick={() => setOpen(false)}
              >
                Book a call
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

function useSmoothAnchorScroll() {
  useEffect(() => {
    const easeInOutCubic = (value: number) =>
      value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

    const scrollToHash = (hash: string) => {
      const target = document.querySelector(hash);
      if (!target) return false;

      const startY = window.scrollY;
      const navOffset = 96;
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - navOffset;
      const distance = targetY - startY;
      const duration = Math.min(1200, Math.max(520, Math.abs(distance) * 0.55));
      const startTime = performance.now();

      const animate = (time: number) => {
        const progress = Math.min(1, (time - startTime) / duration);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          history.pushState(null, "", hash);
        }
      };

      requestAnimationFrame(animate);
      return true;
    };

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      if (scrollToHash(hash)) {
        event.preventDefault();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

function Section({
  children,
  className = "",
  eyebrow,
  id,
  title,
  copy,
}: {
  children: React.ReactNode;
  className?: string;
  eyebrow: string;
  id: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <section className={`bg-[#020202] px-4 py-10 text-white sm:px-6 lg:px-8 ${className}`} id={id}>
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
    <section className="relative overflow-hidden bg-neutral-950 px-4 pb-14 pt-10 text-white sm:px-6 lg:px-8" id="hero">
      <div className="hero-aurora" />
      <div className="hero-dome" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1280px] flex-col items-center justify-start pt-10 text-center sm:min-h-[820px] sm:pt-14 lg:min-h-[850px] lg:pt-16">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/55 px-3 py-2 text-xs font-medium text-neutral-300 shadow-[0_18px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-4 sm:text-sm">
          <span className="rounded-full bg-[#F7D133]/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#F7D133]">
            Backed
          </span>
          <span>Backed by Alliance DAO · Built by engineers from Google, Meta, Y Combinator</span>
        </div>

        <h1 className="mt-12 max-w-5xl text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          Get <span className="text-[#F7D133]">3-6x more reach</span>
          <br className="hidden sm:block" /> for half the cost.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 sm:text-xl">
          Most KOL campaigns pay multiple creators to reach the same users.
          We map 3.3M accounts on Crypto Twitter and fix that.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ActionLink href="#plan-campaign">Analyze my campaign</ActionLink>
          <ActionLink href="#call" variant="secondary">
            Book a call
          </ActionLink>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
          {heroBullets.map((bullet) => (
            <span
              className="rounded-full border border-neutral-800 bg-neutral-950/55 px-4 py-2 backdrop-blur-xl"
              key={bullet}
            >
              {bullet}
            </span>
          ))}
        </div>

        <div className="mt-auto w-full pb-4 sm:pb-8">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Trusted by Web3 teams
          </p>
          <div className="hero-logo-shell mx-auto mt-5 w-full max-w-[1280px]">
            <div className="hero-logo-track py-7">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div className="hero-logo-item" key={`${logo.name}-${index}`}>
                  <img alt={logo.name} decoding="async" src={logo.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  return (
    <Section
      className="pt-5"
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
        <ActionLink href="#plan-campaign">See top creators in my niche</ActionLink>
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

const creatorPool = [
  "PM",
  "KAL",
  "ODD",
  "YES",
  "FUT",
  "ARB",
  "WIN",
  "EDGE",
  "VOL",
  "BET",
  "DATA",
  "ALP",
  "TR",
  "LV",
  "MG",
  "SW",
  "QB",
  "FX",
  "AR",
  "RN",
  "MX",
  "SP",
  "TK",
  "HT",
  "DEX",
  "LEND",
  "LP",
  "YLD",
];

const frequencyStages = [
  "MAX-RICH",
  "RICH",
  "RICH / BALANCED",
  "BALANCED",
  "BALANCED / FREQUENCIES",
  "FREQUENCIES",
  "MAX FREQUENCIES",
  "MAX-FREQUENCIES",
];

const frequencyLabels = ["1×", "2×", "3×", "4×", "5×", "6×", "7×", "8×", "9×", "10×+"];
const staticStandardFrequency = [88, 58, 36, 22, 31, 55, 20, 47, 18, 42];

function clampNumber(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function formatCompactK(value: number) {
  return `${Math.max(1, Math.round(value))}K`;
}

function formatMoney(value: number) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

function getFrequencyStage(frequencyValue: number) {
  const index = clampNumber(Math.round(frequencyValue) - 1, 0, frequencyStages.length - 1);

  return {
    label: frequencyStages[index],
    overlap: clampNumber(8 + index * 1.7, 8, 21),
  };
}

function getControlledFrequency(frequencyValue: number) {
  const peakIndex = clampNumber(
    Math.round(
      frequencyValue -
        1 +
        (frequencyValue >= 6 ? 1 : frequencyValue <= 2 ? -1 : 0),
    ),
    0,
    9,
  );
  const spread =
    frequencyValue <= 2 ? 1.9 : frequencyValue <= 4 ? 2.5 : frequencyValue <= 6 ? 3.05 : 3.5;
  const values = frequencyLabels.map((_, index) => {
    const distance = index - peakIndex;
    let height = 12 + 78 * Math.exp(-(distance * distance) / spread);
    if (frequencyValue <= 2 && index > peakIndex) height -= (index - peakIndex) * 4.2;
    if (frequencyValue >= 7 && index > peakIndex) height += (index - peakIndex) * 3.4;
    return Math.round(clampNumber(height, 8, 92));
  });

  return { peakIndex, values };
}

function FrequencyChart({
  controlled,
  peakIndex = -1,
  values,
}: {
  controlled?: boolean;
  peakIndex?: number;
  values: number[];
}) {
  return (
    <div className="grid h-28 grid-cols-10 items-end gap-1 border-b border-neutral-700 pb-1">
      {frequencyLabels.map((label, index) => {
        const barTone = !controlled
          ? "border-neutral-600 bg-neutral-600"
          : index === peakIndex
            ? "border-[#F7D133] bg-[#F7D133]"
            : index < peakIndex
              ? "border-sky-400/60 bg-sky-400/35"
              : "border-red-300/60 bg-red-300/35";

        return (
          <span className="grid h-full grid-rows-[1fr_auto] items-end gap-1" key={label}>
            <i
              className={`block min-h-2 rounded-t-sm border ${barTone}`}
              style={{ height: `${clampNumber(values[index], 8, 92)}%` }}
            />
            <b className="text-center font-mono text-[9px] font-semibold text-neutral-500">
              {label}
            </b>
          </span>
        );
      })}
    </div>
  );
}

function AvatarStack({
  accent,
  offset,
  total,
}: {
  accent?: boolean;
  offset: number;
  total: number;
}) {
  const mutedPalette = ["#d9d9d9", "#cfcfcf", "#e5e5e5", "#bdbdbd"];
  const vividPalette = [
    "#f54848",
    "#10b7b1",
    "#ff8040",
    "#e842a0",
    "#3ba64c",
    "#2b55ff",
    "#5f63f5",
    "#f3c51b",
    "#17c46d",
    "#ff5ca6",
  ];
  const visible = accent && total > 12 ? 11 : Math.min(12, total);
  const items = Array.from({ length: visible });

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((_, index) => {
        const label = creatorPool[(index + offset) % creatorPool.length];
        const background = accent
          ? vividPalette[(index + offset) % vividPalette.length]
          : mutedPalette[(index + offset) % mutedPalette.length];

        return (
          <span
            className="grid size-9 place-items-center rounded-full text-[10px] font-semibold"
            key={`${label}-${index}`}
            style={{
              background,
              color: accent && (background === "#f3c51b" || background === "#f7d133") ? "#111" : accent ? "#fff" : "transparent",
            }}
          >
            {accent ? label : ""}
          </span>
        );
      })}
      {total > visible ? (
        <span className="grid size-9 place-items-center rounded-full border border-[#F7D133]/40 bg-[#F7D133]/10 text-xs font-semibold text-[#F7D133]">
          +{total - visible}
        </span>
      ) : null}
    </div>
  );
}

function MiniMetric({
  label,
  note,
  tone = "default",
  value,
}: {
  label: string;
  note?: string;
  tone?: "default" | "primary" | "warning" | "good";
  value: string;
}) {
  const toneClass =
    tone === "primary"
      ? "border-[#F7D133]/40 bg-[#F7D133]/10"
      : tone === "warning"
        ? "border-red-400/25 bg-red-500/10"
        : tone === "good"
          ? "border-emerald-400/25 bg-emerald-500/10"
          : "border-neutral-800 bg-neutral-950/70";

  return (
    <div className={`rounded-2xl border p-4 ${toneClass}`}>
      <span className="text-sm text-neutral-500">{label}</span>
      <strong className="mt-2 block text-3xl font-medium text-white">{value}</strong>
      {note ? (
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
          {note}
        </span>
      ) : null}
    </div>
  );
}

function CampaignCalculator() {
  const [budget, setBudget] = useState(5);
  const [frequency, setFrequency] = useState(5);
  const [standardOpen, setStandardOpen] = useState(false);

  const standardRate = 0.12;
  const selectRate = 0.85;
  const agencyCreators = Math.max(4, Math.round(6 + (budget - 5) * 0.45));
  const agencyPosts = agencyCreators * 4;
  const agencyRelevant = Math.max(1, Math.round((agencyPosts * 3900 * standardRate) / 1000));
  const agencyWaste = Math.round(budget * 1000 * (1 - standardRate));
  const budgetLift = Math.max(0, budget - 5);
  const selectCreators = clampNumber(
    Math.round(11 + (5 - frequency) * 0.55 + budgetLift * 0.7),
    8,
    18,
  );
  const selectPosts = selectCreators * 4;
  const selectReachFactor = 0.19 * (1 + (4 - frequency) * 0.06 + budgetLift * 0.015);
  const reach = Math.max(1, Math.round((selectPosts * 3900 * selectReachFactor) / 1000));
  const selectWorking = Math.round(budget * 1000 * selectRate);
  const selectOffset = (frequency * 7 + budgetLift * 5) % creatorPool.length;
  const standardOffset = (budget * 2 + frequency) % 4;
  const controlledFrequency = getControlledFrequency(frequency);
  const stage = getFrequencyStage(frequency);

  return (
    <Section
      copy="Move the controls. See what you can shape — and what most campaigns leave to chance."
      eyebrow="Plan campaign"
      id="plan-campaign"
      title="Plan your campaign with real audience data"
    >
      <div className="mt-7 grid gap-4 xl:grid-cols-[0.8fr_1fr_1fr]">
        <aside className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
          <h3 className="text-2xl font-medium">Campaign inputs</h3>
          <p className="mt-1 text-sm text-neutral-500">Play with controls below</p>
          <div className="mt-6 grid gap-6">
            <label className="block">
              <span className="flex items-center justify-between gap-4 text-sm text-neutral-400">
                Budget
                <strong className="text-lg font-medium text-white">${budget}K</strong>
              </span>
              <input
                className="mt-3 w-full accent-[#F7D133]"
                max="50"
                min="5"
                onChange={(event) => setBudget(Number(event.target.value))}
                step="1"
                type="range"
                value={budget}
              />
            </label>
            <label className="block">
              <span className="flex items-center justify-between gap-4 text-sm text-neutral-400">
                Audience frequency
                <strong className="text-lg font-medium text-white">{frequency}×</strong>
              </span>
              <input
                className="mt-3 w-full accent-[#F7D133]"
                max="8"
                min="1"
                onChange={(event) => setFrequency(Number(event.target.value))}
                step="1"
                type="range"
                value={frequency}
              />
              <span className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-600">
                <span>Max reach</span>
                <span>Balanced</span>
                <span>Max frequency</span>
              </span>
            </label>
          </div>
          <p className="mt-6 rounded-2xl border border-[#F7D133]/40 bg-[#F7D133]/10 p-4 text-sm leading-6 text-neutral-300">
            Inside the optimizer there are 20+ unique parameters for selecting
            the best influencer lineup.
          </p>
        </aside>

        <button
          aria-expanded={standardOpen}
          className="flex min-h-12 items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900 px-4 text-left text-sm font-medium text-white xl:hidden"
          onClick={() => setStandardOpen((value) => !value)}
          type="button"
        >
          Compare to standard approach {standardOpen ? "↑" : "↓"}
        </button>

        <section
          className={`rounded-3xl border border-neutral-800 bg-neutral-900/50 p-5 ${
            standardOpen ? "block" : "hidden xl:block"
          }`}
        >
          <h3 className="text-2xl font-medium">Standard approach</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniMetric label="Creators" value={String(agencyCreators)} />
            <MiniMetric label="Posts" value={String(agencyPosts)} />
            <MiniMetric
              label="Estimated relevant audience"
              tone="primary"
              value={`~${formatCompactK(agencyRelevant)}`}
            />
            <MiniMetric
              label="Wasted budget"
              note="Budget not reaching your niche"
              tone="warning"
              value={formatMoney(agencyWaste)}
            />
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-neutral-400">
            <li className="flex justify-between rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3">
              <span>Frequency control</span>
              <b className="font-medium text-red-200">not controlled</b>
            </li>
            <li className="flex justify-between rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3">
              <span>Overlap</span>
              <b className="font-medium text-red-200">not measured</b>
            </li>
          </ul>
          <div className="mt-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
            <p className="text-sm font-medium text-white">Uncontrolled frequency</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Random distribution
            </p>
            <div className="mt-4">
              <FrequencyChart values={staticStandardFrequency} />
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-500">
              Frequency happens, but it is not controlled.
            </p>
          </div>
          <p className="mt-4 text-sm font-medium text-neutral-300">Selected creators</p>
          <div className="mt-3">
            <AvatarStack offset={standardOffset} total={12} />
          </div>
        </section>

        <section className="rounded-3xl border border-[#F7D133]/40 bg-[#F7D133]/10 p-5">
          <h3 className="text-2xl font-medium">Wallchain Select</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniMetric label="Optimized creators" value={String(selectCreators)} />
            <MiniMetric label="Posts" value={String(selectPosts)} />
            <MiniMetric label="Relevant audience" tone="primary" value={formatCompactK(reach)} />
            <MiniMetric
              label="Working budget"
              note="Budget hitting your niche"
              tone="good"
              value={formatMoney(selectWorking)}
            />
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-neutral-300">
            <li className="flex justify-between rounded-2xl border border-[#F7D133]/30 bg-neutral-950/70 px-4 py-3">
              <span>Frequency control</span>
              <b className="font-medium text-[#F7D133]">{stage.label}</b>
            </li>
            <li className="flex justify-between rounded-2xl border border-[#F7D133]/30 bg-neutral-950/70 px-4 py-3">
              <span>Overlap</span>
              <b className="font-medium text-[#F7D133]">{stage.overlap}% controlled</b>
            </li>
          </ul>
          <div className="mt-4 rounded-2xl border border-[#F7D133]/30 bg-neutral-950/70 p-4">
            <p className="text-sm font-medium text-white">Controlled frequency</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Targeted distribution
            </p>
            <p className="mt-3 rounded-xl border border-[#F7D133]/40 bg-[#F7D133]/10 px-3 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#F7D133]">
              {stage.label}
            </p>
            <div className="mt-4">
              <FrequencyChart
                controlled
                peakIndex={controlledFrequency.peakIndex}
                values={controlledFrequency.values}
              />
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-500">
              Frequency is planned around your target.
            </p>
          </div>
          <p className="mt-4 text-sm font-medium text-neutral-300">
            Selected creators ({selectCreators})
          </p>
          <div className="mt-3">
            <AvatarStack accent offset={selectOffset} total={selectCreators} />
          </div>
        </section>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ActionLink href="#plan-campaign">Analyze my campaign</ActionLink>
        <ActionLink href="#call" variant="secondary">
          Book a call
        </ActionLink>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          15-minute call. No slides. Just your campaign data.
        </p>
      </div>
    </Section>
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
  useSmoothAnchorScroll();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <SiteNavigation />
      <Hero />
      <Pain />
      <NicheFollowers />
      <CreatorNetwork />
      <CampaignCalculator />
      <BridgeCTA />
      <ProofBand />
      <Testimonials />
      <Contact1 />
      <CTA3 />
      <div id="faq">
        <FAQ2 faqs={faqs} />
      </div>
    </main>
  );
}
