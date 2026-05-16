import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import Counter from "@/components/Counter";
import CountUp from "@/components/CountUp";
import { CTA3 } from "@/components/blocks/cta-3";
import { Contact1 } from "@/components/blocks/contact-1";
import { FAQ2 } from "@/components/blocks/faq-2";
import CTA9 from "@/components/blocks/cta-9";
import SocialProof11 from "@/components/blocks/social-proof-11";
import Stats10 from "@/components/blocks/stats-10";

const titleFontFamily =
  '"Bai Jamjuree", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function AnimatedNumber({
  value,
  prefix,
  suffix,
  fontSize = 30,
  fontWeight = 500,
  color = "currentColor",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  fontSize?: number;
  fontWeight?: number | string;
  color?: string;
}) {
  const rounded = Math.max(0, Math.round(value));
  const groups = rounded.toLocaleString("en-US").split(",");

  return (
    <span
      className="inline-flex items-center align-baseline"
      style={{
        fontFamily: titleFontFamily,
        fontSize,
        fontWeight,
        lineHeight: 1,
        color,
      }}
    >
      {prefix ? <span>{prefix}</span> : null}
      {groups.map((segment, index) => (
        <span className="inline-flex items-center" key={`${segment}-${index}`}>
          {index > 0 ? <span>,</span> : null}
          <Counter
            fontSize={fontSize}
            fontWeight={fontWeight}
            gap={0}
            gradientHeight={0}
            horizontalPadding={0}
            textColor={color}
            value={parseInt(segment, 10)}
          />
        </span>
      ))}
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}

const wallchainLogoUrl = new URL("./assets/wallchain-logo.svg", import.meta.url).href;
const allianceLogoUrl = new URL("./assets/alliance.svg", import.meta.url).href;
const engineersLogosUrl = new URL("./assets/engineers-logos.svg", import.meta.url).href;

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
  "3.3M crypto accounts mapped",
  "150K KOLs scored",
  "60+ niches analyzed",
];

const niches = [
  "Prediction Markets",
  "DeFi",
  "Stablecoins",
  "NFTs",
  "L2s",
  "GameFi",
  "Memecoins",
  "Onchain Trading",
];

const creatorValues: Record<string, number> = {
  "Prediction Markets": 4.8,
  DeFi: 8.1,
  Stablecoins: 3.6,
  NFTs: 2.9,
  L2s: 6.4,
  GameFi: 5.2,
  Memecoins: 9.7,
  "Onchain Trading": 11.8,
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
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[-1] h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_32%,rgba(0,0,0,0.58)_68%,rgba(0,0,0,0)_100%)]"
      />
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.nav
          animate={{ opacity: 1, y: 0 }}
          className={`relative flex items-center justify-between py-1.5 transition-[background-color,backdrop-filter,box-shadow,border-radius,padding-left,padding-right] duration-300 ease-out ${
            scrolled
              ? "rounded-2xl bg-neutral-950/70 pl-4 pr-1.5 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "rounded-none bg-transparent px-0"
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
              className="outline-cta hidden items-center gap-2 px-5 py-2.5 text-sm font-medium transition duration-200 sm:inline-flex"
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
              className="grid size-10 cursor-pointer place-items-center rounded-full bg-neutral-900 text-white md:hidden"
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
              className="mt-2 flex flex-col gap-1 rounded-2xl bg-neutral-950/85 p-4 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.8)] backdrop-blur-xl md:hidden"
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
      className={`rounded-3xl p-5 ${
        tone === "accent"
          ? "bg-[#F7D133]/12 text-[#F7D133]"
          : "bg-neutral-900/70 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
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
        <div className="hero-stat-row hero-meta-text text-neutral-400">
          {heroBullets.map((bullet) => (
            <span key={bullet}>{bullet}</span>
          ))}
        </div>

        <h1 className="mt-10 max-w-5xl text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          Get <span className="text-[#F7D133]">3-6x more relevant reach</span>
          <br className="hidden sm:block" /> for half the cost.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 sm:text-xl">
          Most KOL campaigns reach broad audiences with no control over overlap or
          frequency. Wallchain targets your niche audience - and gives you control
          over both.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ActionLink href="#plan-campaign">Analyze my campaign</ActionLink>
          <ActionLink href="#call" variant="secondary">
            Book a call
          </ActionLink>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 text-neutral-400 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-4">
            <span className="hero-meta-text">
              Backed by
            </span>
            <img
              alt="Alliance"
              className="hero-trust-logo h-5 w-auto opacity-70"
              decoding="async"
              src={allianceLogoUrl}
            />
          </div>
          <div className="hidden h-5 w-px bg-neutral-800 sm:block" />
          <div className="flex items-center gap-4">
            <span className="hero-meta-text">
              Built by engineers from
            </span>
            <img
              alt="Google, Meta, Y Combinator"
              className="hero-trust-logo h-5 w-auto opacity-70"
              decoding="async"
              src={engineersLogosUrl}
            />
          </div>
        </div>

        <div className="hero-logo-zone mt-auto w-full pb-4 sm:pb-8">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Used by teams at
          </p>
          <div className="hero-logo-shell mx-auto mt-5 w-full max-w-[1280px]">
            <div className="hero-logo-track py-7">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
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
      eyebrow="The report didn't tell you."
      id="pain"
      title={
        <>
          Your last{" "}
          <span className="text-[#F7D133]">KOL campaign</span>{" "}
          <span className="sm:block">
            was probably <span className="text-[#F7D133]">60% waste.</span>
          </span>
        </>
      }
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
                  className="flex items-center gap-3 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-100"
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
            Standard KOL campaign reports show you impressions because that's
            all they can measure. Overlap, off-niche reach, random frequency
            — none of that is tracked, and the report still calls it a win.
          </p>
        </DataTile>
      </div>
    </Section>
  );
}

function NicheFollowers() {
  return (
    <Section
      eyebrow="Follower count don’t predict conversion"
      id="niche-followers"
      title="Most teams don't know which part of their impressions actually mattered."
    >
      <div className="mt-8">
        <article className="text-white">
          <div className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <AudienceDiagram compact />
              <NicheMetricCopy compact />
            </div>
            <div className="self-start lg:justify-self-end lg:max-w-[640px] xl:max-w-[680px]">
              <NicheDiscoveryCard condensed />
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}

function AudienceDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex justify-center">
      <div
        className={`relative rounded-full border-[2px] border-neutral-300/80 bg-[#050505] ${
          compact
            ? "size-[260px] sm:size-[340px] lg:size-[300px]"
            : "size-[340px] sm:size-[440px]"
        }`}
      >
        <div
          className={`absolute left-1/2 rounded-full border-[2px] border-[#111] bg-[#F7D133] shadow-[0_0_50px_rgba(247,209,51,0.18),inset_0_1px_0_rgba(255,255,255,0.4)] ${
            compact
              ? "bottom-[12%] size-[76px] -translate-x-1/2 sm:size-[92px]"
              : "bottom-[12%] size-[112px] -translate-x-1/2"
          }`}
        />
      </div>
    </div>
  );
}

function NicheMetricCopy({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mx-auto max-w-[420px] lg:mx-0" : ""}>
      <p className="text-sm font-medium leading-none text-neutral-400 sm:text-base">
        That is what others see
      </p>
      <p
        className="mt-3 text-3xl font-medium leading-none tracking-tight text-white sm:text-4xl"
        style={{ fontFamily: titleFontFamily }}
      >
        120K followers
      </p>
      <p
        className="my-6 text-5xl font-medium leading-none text-white sm:my-7"
        style={{ fontFamily: titleFontFamily }}
      >
        ↓
      </p>
      <p className="text-sm font-medium leading-none text-neutral-400 sm:text-base">
        This is what Wallchain sees
      </p>
      <p
        className="mt-3 inline-block max-w-none text-3xl font-medium leading-[1.08] tracking-tight text-[#F7D133] sm:text-4xl"
        style={{ fontFamily: titleFontFamily }}
      >
        584 niche followers
      </p>
      <p className="mt-2 text-base font-semibold text-neutral-500">
        This is what matters
      </p>
    </div>
  );
}

function NicheDiscoveryCard({
  className = "",
  condensed = false,
}: {
  className?: string;
  condensed?: boolean;
}) {
  return (
    <div
      className={`text-white ${
        condensed ? "flex h-full flex-col justify-between" : ""
      } ${className}`}
    >
      <div
        className={
          condensed
            ? "grid gap-6"
            : "grid gap-6 lg:grid-cols-[0.82fr_1.4fr_0.82fr]"
        }
      >
        <h3 className="max-w-[210px] text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
          How we know who is actually in your niche:
        </h3>
        <div className="grid gap-6">
          <SignalRow label="User A follows:" variant="random" />
          <SignalRow label="User B follows:" variant="buyer" />
        </div>
        {!condensed ? (
          <div className="grid content-center gap-10 text-base font-medium sm:text-lg">
            <p className="flex items-center gap-4 text-red-300">
              <span className="text-white">&gt;</span>
              <span>× Random crypto user</span>
            </p>
            <p className="flex items-center gap-4 text-green-300">
              <span className="text-white">&gt;</span>
              <span>✓ Real prediction markets buyer.</span>
            </p>
          </div>
        ) : null}
      </div>
      {condensed ? (
        <div className="mt-7 grid gap-4 text-base font-medium">
          <p className="flex items-start gap-3 text-red-300">
            <span className="text-white">&gt;</span>
            <span>× Random crypto user</span>
          </p>
          <p className="flex items-start gap-3 text-green-300">
            <span className="text-white">&gt;</span>
            <span>✓ Real prediction markets buyer.</span>
          </p>
        </div>
      ) : null}
      <p className="mt-7 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
        # We mapped 3.3M Crypto Twitter accounts so you don't have to.
      </p>
    </div>
  );
}

function SignalRow({
  label,
  variant,
}: {
  label: string;
  variant: "random" | "buyer";
}) {
  return (
    <div>
      <p className="text-sm font-medium leading-none text-neutral-400 sm:text-base">{label}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-base font-medium text-white sm:text-lg">
        <PolymarketBadge />
        {variant === "buyer" ? (
          <>
            <KalshiBadge />
            <span>Polymarket + Kalshi</span>
          </>
        ) : (
          <span>Polymarket</span>
        )}
      </div>
    </div>
  );
}

function PolymarketBadge() {
  return (
    <span className="grid size-10 place-items-center overflow-hidden rounded-full bg-[#2555ff]">
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 29L74 17Q80 16 80 22V78Q80 84 74 83L23 71Q19 70 19 65V35Q19 31 23 29ZM30 36V48L70 38V25ZM30 53V64L70 74V61ZM31 51L70 58V42Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function KalshiBadge() {
  return (
    <span className="-ml-2 grid size-10 place-items-center overflow-hidden rounded-full bg-[#18d98c]">
      <span className="text-[8px] font-semibold tracking-[-0.01em] text-[#07110c]">
        Kalshi
      </span>
    </span>
  );
}

function CreatorNetwork() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);

  return (
    <section
      className="overflow-hidden bg-[#020202] px-4 py-10 text-white sm:px-6 lg:px-8"
      id="creator-network"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          Creator network
        </p>
        <h2 className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Same creator. Different value.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
          Switch the niche. The same creator performs differently.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <div className="relative flex items-center gap-1 overflow-x-auto rounded-full p-1">
            {niches.map((niche) => {
              const active = selectedNiche === niche;
              return (
                <button
                  className={`relative cursor-pointer whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "text-[#F7D133]"
                      : "text-neutral-500 hover:text-neutral-200"
                  }`}
                  key={niche}
                  onClick={() => setSelectedNiche(niche)}
                  type="button"
                >
                  {active && (
                    <motion.span
                      layoutId="niche-pill"
                      className="absolute inset-0 rounded-full bg-[#F7D133]/15"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative">{niche}</span>
                </button>
              );
            })}
          </div>
          <span
            aria-disabled="true"
            className="rounded-full bg-neutral-950 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-600"
          >
            + 45 more niches
          </span>
        </div>

        <div className="mt-4 border-t border-neutral-800" />

        <div className="relative min-h-[300px] overflow-hidden border-b border-neutral-800 py-6 sm:py-8 lg:min-h-[360px]">
          <CreatorCard
            className="lg:absolute lg:left-[8%] lg:top-[78px] lg:w-[30%] lg:-rotate-1"
            handle="@sample_alpha"
            initials="AA"
            subline="Sample network"
          />
          <CreatorCard
            active
            className="mx-auto lg:absolute lg:left-1/2 lg:top-[28px] lg:w-[400px] lg:-translate-x-1/2"
            handle="@creator_demo"
            initials="JK"
            selectedNiche={selectedNiche}
            subline="120K followers"
            value={creatorValues[selectedNiche]}
          />
          <CreatorCard
            className="mt-3 lg:absolute lg:right-[8%] lg:top-[78px] lg:mt-0 lg:w-[30%] lg:rotate-1"
            handle="@sample_beta"
            initials="BB"
            subline="Sample network"
          />
        </div>

      </div>
    </section>
  );
}

function CreatorCard({
  active = false,
  className = "",
  handle,
  initials,
  selectedNiche,
  subline,
  value,
}: {
  active?: boolean;
  className?: string;
  handle: string;
  initials: string;
  selectedNiche?: string;
  subline: string;
  value?: number;
}) {
  return (
    <article
      className={`flex flex-col items-center justify-center rounded-lg text-center transition duration-300 ${
        active
          ? "z-[2] min-h-[280px] bg-neutral-950 p-5 shadow-[0_18px_60px_-32px_rgba(247,209,51,0.5)] sm:min-h-[300px]"
          : "min-h-[180px] bg-neutral-950/45 p-5 opacity-35"
      } ${className}`}
    >
      <div
        className={`grid place-items-center rounded-full font-semibold ${
          active
            ? "size-14 bg-[#F7D133] text-base text-neutral-950"
            : "size-12 bg-[#F7D133]/15 text-sm text-neutral-500"
        }`}
      >
        {initials}
      </div>
      <h3
        className={`mt-4 font-medium leading-none tracking-tight ${
          active ? "text-2xl text-white sm:text-3xl" : "text-xl text-neutral-500"
        }`}
      >
        {handle}
      </h3>
      <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {subline}
      </p>
      {active ? (
        <div className="mt-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Relevant audience
          </p>
          <CountUp
            className="mt-1 block text-5xl font-medium leading-none tracking-tight text-[#F7D133] sm:text-6xl"
            decimals={1}
            duration={1}
            from={0}
            suffix="K"
            style={{ fontFamily: titleFontFamily }}
            to={value ?? 0}
          />
          <p className="mt-3 text-base font-medium text-white sm:text-lg">
            Niche: {selectedNiche}
          </p>
          <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Sample data
          </p>
        </div>
      ) : null}
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
          ? "bg-neutral-600"
          : index === peakIndex
            ? "bg-[#F7D133]"
            : index < peakIndex
              ? "bg-sky-400/35"
              : "bg-red-300/35";

        return (
          <span className="grid h-full grid-rows-[1fr_auto] items-end gap-1" key={label}>
            <i
              className={`block min-h-2 rounded-t-sm ${barTone}`}
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
    <div className="flex flex-wrap gap-1.5">
      {items.map((_, index) => {
        const label = creatorPool[(index + offset) % creatorPool.length];
        const background = accent
          ? vividPalette[(index + offset) % vividPalette.length]
          : mutedPalette[(index + offset) % mutedPalette.length];

        return (
          <span
            className="grid size-8 place-items-center rounded-full text-[9px] font-semibold"
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
        <span className="grid size-8 place-items-center rounded-full bg-[#F7D133]/10 text-[11px] font-semibold text-[#F7D133]">
          +{total - visible}
        </span>
      ) : null}
    </div>
  );
}

function MiniMetric({
  className = "",
  label,
  note,
  tone = "default",
  value,
}: {
  className?: string;
  label: string;
  note?: string;
  tone?: "default" | "primary" | "warning" | "good";
  value: React.ReactNode;
}) {
  const valueColorClass =
    tone === "primary"
      ? "text-[#F7D133]"
      : tone === "warning"
        ? "text-red-300"
        : tone === "good"
          ? "text-emerald-300"
          : "text-white";

  return (
    <div className={`grid min-h-[92px] min-w-0 grid-rows-[2.35rem_1.65rem_1fr] rounded-xl bg-neutral-950/60 px-3 py-2.5 ${className}`}>
      <span className="block max-w-[11ch] text-[11px] leading-[1.15] text-neutral-500">{label}</span>
      <strong className={`block self-start ${valueColorClass}`}>{value}</strong>
      {note ? (
        <span className="block self-end font-mono text-[8px] uppercase leading-[1.25] tracking-[0.12em] text-neutral-500">
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
      <div className="mt-7 overflow-hidden rounded-[28px] bg-neutral-900/40 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
        <div className="grid gap-3.5 xl:grid-cols-[0.52fr_2fr] xl:items-stretch">
          <aside className="rounded-2xl bg-neutral-950/30 p-3.5">
            <h3 className="text-2xl font-medium">Campaign inputs</h3>
            <p className="mt-1 text-sm text-neutral-500">Play with controls below</p>
            <div className="mt-5 grid gap-4">
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
            <p className="mt-5 rounded-2xl bg-[#F7D133]/10 p-4 text-sm leading-6 text-neutral-300">
              Inside the optimizer there are 20+ unique parameters for selecting
              the best influencer lineup.
            </p>
          </aside>

          <button
            aria-expanded={standardOpen}
            className="flex min-h-12 items-center justify-between rounded-2xl bg-neutral-900 px-4 text-left text-sm font-medium text-white xl:hidden"
            onClick={() => setStandardOpen((value) => !value)}
            type="button"
          >
            Compare to standard approach {standardOpen ? "↑" : "↓"}
          </button>

          <div className="grid gap-3.5 xl:border-l xl:border-neutral-800/80 xl:pl-3.5 xl:grid-cols-2 xl:items-stretch xl:[grid-template-rows:minmax(142px,auto)_56px_56px_minmax(220px,1fr)_78px]">
            <section
              className={`gap-3.5 rounded-[24px] bg-neutral-950/25 p-3.5 xl:row-span-5 xl:[grid-template-rows:subgrid] ${
                standardOpen ? "grid" : "hidden xl:grid"
              }`}
            >
              <div className="flex h-full flex-col">
                <h3 className="text-2xl font-medium">Standard approach</h3>
                <div className="mt-3 grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
                  <MiniMetric label="Creators" value={<AnimatedNumber fontSize={22} value={agencyCreators} />} />
                  <MiniMetric label="Posts" value={<AnimatedNumber fontSize={22} value={agencyPosts} />} />
                  <MiniMetric
                    label="Estimated relevant audience"
                    tone="primary"
                    value={
                      <AnimatedNumber
                        fontSize={22}
                        prefix="~"
                        suffix="K"
                        value={Math.max(1, agencyRelevant)}
                      />
                    }
                  />
                  <MiniMetric
                    label="Wasted budget"
                    note="Budget not reaching your niche"
                    tone="warning"
                    value={<AnimatedNumber fontSize={22} prefix="$" value={agencyWaste} />}
                  />
                </div>
              </div>
              <div className="flex h-full items-center justify-between gap-3.5 border-t border-neutral-800/80 px-3.5 text-sm text-neutral-400">
                <span>Frequency control</span>
                <b className="font-medium text-red-200">not controlled</b>
              </div>
              <div className="flex h-full items-center justify-between gap-3.5 border-t border-neutral-800/80 px-3.5 text-sm text-neutral-400">
                <span>Overlap</span>
                <b className="font-medium text-red-200">not measured</b>
              </div>
              <div className="flex h-full flex-col border-t border-neutral-800/80 p-3.5">
                <p className="text-sm font-medium text-white">Uncontrolled frequency</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                  Random distribution
                </p>
                <div className="mt-3 flex-1">
                  <FrequencyChart values={staticStandardFrequency} />
                </div>
                <p className="mt-2 font-mono text-xs text-neutral-500">
                  Frequency happens, but it is not controlled.
                </p>
              </div>
              <div className="flex h-full flex-col justify-center border-t border-neutral-800/80 px-3.5">
                <p className="text-sm font-medium text-neutral-300">Selected creators</p>
                <div className="mt-2">
                  <AvatarStack offset={standardOffset} total={12} />
                </div>
              </div>
            </section>

            <section className="grid h-full gap-3.5 rounded-[24px] bg-[#F7D133]/10 p-3.5 xl:-my-3.5 xl:-mr-3.5 xl:row-span-5 xl:[grid-template-rows:subgrid] xl:rounded-l-[24px] xl:rounded-r-[28px] xl:pb-7 xl:pt-7">
              <div className="flex h-full flex-col">
                <h3 className="text-2xl font-medium">Wallchain Select</h3>
                <div className="mt-3 grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
                  <MiniMetric className="bg-transparent" label="Optimized creators" value={<AnimatedNumber fontSize={22} value={selectCreators} />} />
                  <MiniMetric className="bg-transparent" label="Posts" value={<AnimatedNumber fontSize={22} value={selectPosts} />} />
                  <MiniMetric
                    className="bg-transparent"
                    label="Relevant audience"
                    tone="primary"
                    value={<AnimatedNumber fontSize={22} suffix="K" value={Math.max(1, reach)} />}
                  />
                  <MiniMetric
                    className="bg-transparent"
                    label="Working budget"
                    note="Budget hitting your niche"
                    tone="good"
                    value={<AnimatedNumber fontSize={22} prefix="$" value={selectWorking} />}
                  />
                </div>
              </div>
              <div className="flex h-full items-center justify-between gap-3.5 border-t border-[#F7D133]/15 px-3.5 text-sm text-neutral-300">
                <span>Frequency control</span>
                <b className="font-medium text-[#F7D133]">{stage.label}</b>
              </div>
              <div className="flex h-full items-center justify-between gap-3.5 border-t border-[#F7D133]/15 px-3.5 text-sm text-neutral-300">
                <span>Overlap</span>
                <b className="font-medium text-[#F7D133]">{stage.overlap}% controlled</b>
              </div>
              <div className="flex h-full flex-col border-t border-[#F7D133]/15 p-3.5">
                <div className="flex items-start justify-between gap-3.5">
                  <div>
                    <p className="text-sm font-medium text-white">Controlled frequency</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                      Targeted distribution
                    </p>
                  </div>
                  <p className="px-3 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#F7D133]">
                    {stage.label}
                  </p>
                </div>
                <div className="mt-3 flex-1">
                  <FrequencyChart
                    controlled
                    peakIndex={controlledFrequency.peakIndex}
                    values={controlledFrequency.values}
                  />
                </div>
                <p className="mt-2 font-mono text-xs text-neutral-500">
                  Frequency is planned around your target.
                </p>
              </div>
              <div className="flex h-full flex-col justify-center border-t border-[#F7D133]/15 px-3.5">
                <p className="text-sm font-medium text-neutral-300">
                  Selected creators ({selectCreators})
                </p>
                <div className="mt-2">
                  <AvatarStack accent offset={selectOffset} total={selectCreators} />
                </div>
              </div>
            </section>
          </div>
        </div>
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
  return <div id="run-your-numbers"><CTA9 /></div>;
}

function ProofBand() {
  const stats = [
    {
      value: 3.7,
      suffix: "x",
      decimals: 1,
      label: "more relevant audience",
      bg: "#101513",
      fg: "#fbfaf2",
    },
    {
      value: 2,
      suffix: "x",
      decimals: 0,
      label: "cheaper per niche audience member",
      bg: "#f7d133",
      fg: "#1a1400",
    },
    {
      value: 60,
      suffix: "+",
      label: "mapped niches",
      bg: "#dfe9df",
      fg: "#102114",
    },
    {
      value: 3.3,
      suffix: "M",
      decimals: 1,
      label: "mapped crypto accounts",
      bg: "#111827",
      fg: "#f8fafc",
    },
  ];

  return (
    <Stats10
      ctaHref="#call"
      ctaLabel="Read the full Prediction Markets analysis"
      eyebrow="Numbers from real campaigns"
      id="proof"
      stats={stats}
      title="Optimization changes what the same budget can buy."
    />
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
      <SocialProof11 />
      <Contact1 />
      <CTA3 />
      <div id="faq">
        <FAQ2 faqs={faqs} />
      </div>
    </main>
  );
}
