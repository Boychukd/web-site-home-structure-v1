import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, BadgeCheck, Menu, MoreHorizontal, User, X } from "lucide-react";
import Counter from "@/components/Counter";
import CountUp from "@/components/CountUp";
import BorderGlow from "@/components/BorderGlow";
import { AnimatedArrowIcon } from "@/components/AnimatedArrowIcon";
import { CTA3 } from "@/components/blocks/cta-3";
import { Contact1 } from "@/components/blocks/contact-1";
import { FAQ2 } from "@/components/blocks/faq-2";
import CTA9 from "@/components/blocks/cta-9";
import SocialProof11 from "@/components/blocks/social-proof-11";
import Stats10 from "@/components/blocks/stats-10";
import { SignalPanel } from "@/components/ui/SignalPanel";
import {
  sectionEyebrowClass,
  sectionSubtitleClass,
  sectionTitleClass,
} from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

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
const twitterAvatarModules = import.meta.glob("./assets/twitter-avatars/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const twitterAvatarUrls = Object.entries(twitterAvatarModules)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([, src]) => src);
const demoAvatarUrls = {
  active: new URL("./assets/twitter-avatars/Dimaweb3girl.jpg", import.meta.url).href,
  next: new URL("./assets/twitter-avatars/web3femme.jpg", import.meta.url).href,
  previous: new URL("./assets/twitter-avatars/InspiredByWill_.jpg", import.meta.url).href,
};

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

const footerLinkGroups = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#niche-followers" },
      { label: "Campaign planner", href: "#plan-campaign" },
      { label: "Results", href: "#proof" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Book a call", href: "#call" },
      { label: "Contact", href: "#call" },
      { label: "FAQ", href: "#faq" },
    ],
  },
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

const nicheTabLabels: Record<string, string> = {
  "Prediction Markets": "Predictions",
  "Onchain Trading": "Onchain",
};

const creatorNicheRotationMs = 4500;
const creatorTabFadeMs = 840;

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

const creatorDemoProfiles = {
  previous: {
    avatar: demoAvatarUrls.previous,
    bio: "Market maps, perp notes, and oddly specific threads.",
    displayName: "Mina Roe",
    followersLabel: "120K",
    handle: "@mina_demo",
    totalFollowers: 120,
  },
  active: {
    avatar: demoAvatarUrls.active,
    bio: "Crypto markets, launch notes, and onchain audience reads.",
    displayName: "Juno K.",
    followersLabel: "120K",
    handle: "@juno_demo",
    totalFollowers: 120,
  },
  next: {
    avatar: demoAvatarUrls.next,
    bio: "L2 gossip, mint windows, and charts worth saving.",
    displayName: "Oren Vale",
    followersLabel: "120K",
    handle: "@oren_demo",
    totalFollowers: 120,
  },
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
      className={`${ui.component.ctaBase} hover:scale-[1.02] ${
        variant === "primary"
          ? ui.component.ctaPrimary
          : ui.component.ctaSecondary
      }`}
      href={href}
    >
      {children}
      <AnimatedArrowIcon className="size-4" />
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
      <div className={ui.layout.container}>
        <motion.nav
          animate={{ opacity: 1, y: 0 }}
          className={`relative flex items-center justify-between py-1.5 transition-[background-color,backdrop-filter,box-shadow,border-radius,padding-left,padding-right] duration-300 ease-out ${
            scrolled
              ? "rounded-lg bg-surface-strong/70 pl-4 pr-1.5 shadow-nav backdrop-blur-xl"
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
              className={`${ui.component.ctaBase} ${ui.component.ctaSecondary} hidden py-2.5 sm:inline-flex`}
              href="#plan-campaign"
            >
              Analyze my campaign
              <AnimatedArrowIcon className="size-4" />
            </a>
            <a
              className={`${ui.component.ctaBase} ${ui.component.ctaPrimary} hidden py-2.5 sm:inline-flex`}
              href="#call"
            >
              Book a call
              <AnimatedArrowIcon className="size-4" />
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
              className="mt-2 flex flex-col gap-1 rounded-lg bg-surface-strong/85 p-4 shadow-card backdrop-blur-xl md:hidden"
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
                className={`${ui.component.ctaBase} ${ui.component.ctaPrimary} mt-2 w-full py-2.5`}
                href="#call"
                onClick={() => setOpen(false)}
              >
                Book a call
                <AnimatedArrowIcon className="size-4" />
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

function useSignalPanelPointerGlow() {
  useEffect(() => {
    const panels = Array.from(
      document.querySelectorAll<HTMLElement>(".signal-gray-panel, .signal-gray-panel-frame"),
    );

    if (!panels.length) {
      return;
    }

    const cleanups = panels.map((panel) => {
      const handlePointerMove = (event: PointerEvent) => {
        const rect = panel.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        panel.style.setProperty("--signal-panel-pointer-x", `${x.toFixed(2)}%`);
        panel.style.setProperty("--signal-panel-pointer-y", `${y.toFixed(2)}%`);
        panel.style.setProperty("--signal-panel-hover", "1");
      };

      const handlePointerLeave = () => {
        panel.style.setProperty("--signal-panel-pointer-x", "50%");
        panel.style.setProperty("--signal-panel-pointer-y", "50%");
        panel.style.setProperty("--signal-panel-hover", "0");
      };

      panel.addEventListener("pointermove", handlePointerMove);
      panel.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        panel.removeEventListener("pointermove", handlePointerMove);
        panel.removeEventListener("pointerleave", handlePointerLeave);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}

function Section({
  children,
  className = "",
  eyebrow,
  id,
  title,
  copy,
  titleNoWrap = false,
  copyNoWrap = false,
}: {
  children: React.ReactNode;
  className?: string;
  eyebrow: string;
  id: string;
  title: React.ReactNode;
  copy?: string;
  titleNoWrap?: boolean;
  copyNoWrap?: boolean;
}) {
  return (
    <section className={`${ui.layout.sectionCompact} ${className}`} id={id}>
      <div className={ui.layout.container}>
        <div className={ui.layout.headerWithCopy}>
          <p className={sectionEyebrowClass}>
            {eyebrow}
          </p>
          <h2
            className={`${sectionTitleClass} ${
              titleNoWrap ? "lg:whitespace-nowrap" : ""
            }`}
          >
            {title}
          </h2>
          {copy ? (
            <p
              className={`${sectionSubtitleClass} ${
                copyNoWrap ? "lg:whitespace-nowrap" : ""
              }`}
            >
              {copy}
            </p>
          ) : null}
        </div>
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
      className={`linear-panel rounded-card p-card ${
        tone === "accent"
          ? "text-accent"
          : "text-white"
      }`}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-page px-4 pb-16 pt-10 text-text-primary sm:px-6 lg:px-8" id="hero">
      <div className="hero-aurora" />
      <div className="hero-dome" />

      <div className={`${ui.layout.container} relative z-10 flex min-h-[760px] flex-col items-center justify-start pt-10 text-center sm:min-h-[820px] sm:pt-14 lg:min-h-[850px] lg:pt-16`}>
        <div className="hero-stat-row hero-meta-text text-text-secondary">
          {heroBullets.map((bullet) => (
            <span key={bullet}>{bullet}</span>
          ))}
        </div>

        <h1 className="mt-10 max-w-5xl text-hero-title font-medium tracking-normal">
          Get <span className="text-accent">3-6x more relevant reach</span>
          <br className="hidden sm:block" /> for half the cost.
        </h1>

        <p className="mt-6 max-w-readable text-body-lg leading-body text-text-secondary sm:text-xl">
          Standard KOL campaigns reach broad audiences. Wallchain targets your niche
          - and controls overlap and frequency.
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
          <p className={sectionEyebrowClass}>
            Used by teams at
          </p>
          <div className="hero-logo-shell mx-auto mt-5 w-full max-w-container">
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
  const reportedMetrics = [
    ["01", "creators", "10"],
    ["02", "impressions", "240K"],
  ];
  const missedSignals = [
    ["03", "audience_overlap", "61% audience overlap"],
    ["04", "off_niche", "72% outside target niche"],
    ["05", "frequency_dist", "random frequency distribution"],
  ];

  return (
    <section className={`${ui.layout.sectionCompact} pt-5`} id="pain">
      <div className={ui.layout.container}>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(390px,0.98fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-[650px]">
            <p className={sectionEyebrowClass}>
              The report didn't tell you.
            </p>
            <h2 className={`${sectionTitleClass} mt-5 text-left`}>
              Your last{" "}
              <span className="text-accent">KOL campaign</span>{" "}
              <span className="sm:block">
                was probably <span className="text-accent">60% waste.</span>
              </span>
            </h2>
            <p className="mt-9 max-w-[560px] text-body-lg leading-body text-text-secondary">
              We measure overlap and frequency in addition to impressions.
              Standard KOL campaigns can't do that.
            </p>
          </div>

          <SignalPanel
            aria-label="Campaign audit log showing reported metrics and missed signals"
            className="w-full rounded-[28px] font-mono text-[12px] text-text-secondary sm:text-[13px]"
            innerClassName="rounded-[27px]"
            role="img"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.018] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-text-muted sm:px-5">
              <span className="size-2 rounded-full bg-white/18" />
              <span className="size-2 rounded-full bg-white/18" />
              <span className="size-2 rounded-full bg-white/18" />
              <span className="ml-auto truncate">audit_q4 · campaign_026.log</span>
            </div>

            <div className="px-4 py-5 sm:px-6 sm:py-6">
              <AuditTerminalHeading>Reported metrics</AuditTerminalHeading>
              <div className="grid gap-2">
                {reportedMetrics.map(([number, label, value]) => (
                  <AuditTerminalRow key={label} label={label} number={number} value={value} />
                ))}
              </div>

              <div className="my-5">
                <AuditTerminalHeading>But</AuditTerminalHeading>
              </div>

              <div className="grid gap-2">
                {missedSignals.map(([number, label, value]) => (
                  <AuditTerminalRow
                    key={label}
                    label={label}
                    number={number}
                    tone="error"
                    value={value}
                  />
                ))}
              </div>

              <div className="mt-6 border-t border-dashed border-white/10 pt-5 text-sm leading-none">
                <span className="text-text-muted">verdict :: </span>
                <span className="font-medium text-accent">~60% waste</span>
                <span className="text-text-muted"> · standard tools miss this</span>
              </div>
            </div>
          </SignalPanel>
        </div>
      </div>
    </section>
  );
}

function AuditTerminalHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-muted">
      <span>{children}</span>
      <span className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

function AuditTerminalRow({
  label,
  number,
  value,
  tone = "default",
}: {
  label: string;
  number: string;
  value: string;
  tone?: "default" | "error";
}) {
  const isError = tone === "error";

  return (
    <div
      className={`grid grid-cols-[28px_minmax(112px,0.72fr)_minmax(0,1fr)] items-baseline gap-3 py-1.5 ${
        isError ? "text-red-200" : "text-text-secondary"
      }`}
    >
      <span className="text-right text-white/22">{number}</span>
      <span className={isError ? "text-red-300" : "text-text-muted"}>{label}</span>
      <span className={isError ? "text-red-200" : "text-text-primary"}>{">"} {value}</span>
    </div>
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
          <div className="grid gap-8 lg:gap-10">
            <div className="relative overflow-hidden py-6 sm:py-8 lg:py-8">
              <div className="grid items-center gap-5 lg:mx-auto lg:min-h-[390px] lg:max-w-[930px] lg:grid-cols-[minmax(340px,0.88fr)_minmax(260px,0.52fr)] lg:gap-2 xl:max-w-[980px] xl:grid-cols-[minmax(380px,0.92fr)_minmax(280px,0.54fr)]">
                <AudienceDiagram compact />
                <NicheMetricCopy compact />
              </div>
            </div>
            <div className="w-full">
              <NicheDiscoveryCard />
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}

function AudienceDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative flex min-h-[250px] items-center justify-center overflow-visible sm:min-h-[320px] lg:min-h-[390px]">
      <div
        className={`relative shrink-0 ${
          compact
            ? "size-[250px] sm:size-[320px] lg:size-[420px]"
            : "size-[440px] sm:size-[560px]"
        }`}
        aria-hidden="true"
      >
        <span className="absolute inset-[2%] rounded-full border border-white/[0.22] bg-surface-page shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
        <span className="absolute bottom-[17%] left-1/2 size-[31%] -translate-x-1/2 rounded-full border border-accent/80 bg-accent/10 shadow-[0_0_62px_rgba(247,209,51,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]" />
      </div>
    </div>
  );
}

function NicheMetricCopy({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mx-auto w-full max-w-[320px] lg:mx-0 lg:-ml-8" : ""}>
      <div className="grid gap-7 sm:gap-9">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="size-3.5 rounded-full border border-white/30 bg-white/[0.03]" />
            <p className={sectionEyebrowClass}>
              This is what you see
            </p>
          </div>
          <p
            className="mt-3 text-4xl font-medium leading-none tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: titleFontFamily }}
          >
            120K
          </p>
          <p className="mt-1.5 text-sm font-medium leading-none text-neutral-500">
            followers
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <span className="size-3.5 rounded-full border border-accent/80 bg-accent/20 shadow-[0_0_22px_rgba(247,209,51,0.24)]" />
            <p className={`${sectionEyebrowClass} text-accent/75`}>
              This is what matters
            </p>
          </div>
          <p
            className="mt-3 text-5xl font-medium leading-none tracking-tight text-accent sm:text-6xl"
            style={{ fontFamily: titleFontFamily }}
          >
            584
          </p>
          <p className="mt-1.5 text-sm font-medium leading-none text-neutral-300">
            niche followers
          </p>
        </div>
      </div>
    </div>
  );
}

function NicheDiscoveryCard({ className = "" }: { className?: string }) {
  return (
    <div className={`py-6 text-white lg:py-7 ${className}`}>
      <div className="grid gap-5 lg:grid-cols-[minmax(170px,0.56fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-7">
        <h3 className="max-w-[11ch] px-0 text-xl font-medium leading-tight tracking-tight text-white/92 sm:text-2xl">
          How we know who is actually in your niche:
        </h3>
        <SignalInsightRow
          insight="Could be anyone"
          label="User A follows:"
          tone="weak"
          variant="random"
        />
        <SignalInsightRow
          insight="Shows a stronger interest in this niche"
          label="User B follows:"
          tone="strong"
          variant="buyer"
        />
      </div>
      <p className="mt-6 flex items-center justify-center gap-2.5 pt-5 text-center text-body font-normal text-text-secondary">
        <BadgeCheck className="size-3.5 shrink-0 text-accent" />
        <span>
          We mapped 3.3M Crypto Twitter accounts, apply additional filtering
          based on X score, ML prediction models, & more, so you don&apos;t
          have to.
        </span>
      </p>
    </div>
  );
}

function SignalInsightRow({
  insight,
  label,
  tone,
  variant,
}: {
  insight: string;
  label: string;
  tone: "weak" | "strong";
  variant: "random" | "buyer";
}) {
  return (
    <SignalPanel className="grid gap-2 rounded-[28px] px-5 py-5 sm:px-6 sm:py-5.5">
      <p className="text-sm font-medium leading-none text-neutral-400 sm:text-base">
        {label}
      </p>
      <div className="grid gap-2.5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
          <SignalRow variant={variant} />
          <ArrowRight
            aria-hidden="true"
            className="size-4 shrink-0 text-neutral-500"
          />
          <p
            className={`max-w-[16ch] flex-none text-base font-medium leading-snug sm:text-[1.05rem] lg:max-w-[15ch] ${
            tone === "strong" ? "text-success" : "text-red-200"
            }`}
          >
            {insight}
          </p>
        </div>
      </div>
    </SignalPanel>
  );
}

function SignalRow({
  variant,
}: {
  variant: "random" | "buyer";
}) {
  return (
    <div className="inline-flex min-w-0 max-w-full items-center gap-1.5 text-base font-medium leading-none text-white sm:text-[1.05rem]">
      <PolymarketBadge />
      {variant === "buyer" ? (
        <>
          <KalshiBadge />
          <span className="min-w-0 max-w-[8.5ch] leading-snug">
            Polymarket+
            <br />
            Kalshi
          </span>
        </>
      ) : (
        <span className="min-w-0 leading-snug">Polymarket</span>
      )}
    </div>
  );
}

function PolymarketBadge() {
  return (
    <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full bg-[#2555ff]">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
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
    <span className="-ml-1.5 grid size-9 shrink-0 place-items-center overflow-hidden rounded-full bg-[#18d98c]">
      <span className="text-[7px] font-semibold tracking-[-0.01em] text-neutral-950">
        Kalshi
      </span>
    </span>
  );
}

function CreatorNetwork() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);
  const [exitingNiche, setExitingNiche] = useState<string | null>(null);
  const [autoRotatePaused, setAutoRotatePaused] = useState(false);
  const previousSelectedNicheRef = useRef(selectedNiche);
  const selectedIndex = niches.indexOf(selectedNiche);
  const previousNiche = niches[(selectedIndex - 1 + niches.length) % niches.length];
  const nextNiche = niches[(selectedIndex + 1) % niches.length];
  const profileCards = [
    {
      niche: previousNiche,
      position: "previous" as const,
      profile: creatorDemoProfiles.previous,
      orderClass:
        "order-2 lg:absolute lg:left-[3%] lg:top-10 lg:z-0 lg:w-[350px] lg:-rotate-[4deg]",
    },
    {
      niche: selectedNiche,
      position: "active" as const,
      profile: creatorDemoProfiles.active,
      orderClass:
        "order-1 lg:absolute lg:left-1/2 lg:top-0 lg:z-10 lg:w-[410px] lg:-translate-x-1/2",
    },
    {
      niche: nextNiche,
      position: "next" as const,
      profile: creatorDemoProfiles.next,
      orderClass:
        "order-3 lg:absolute lg:right-[3%] lg:top-10 lg:z-0 lg:w-[350px] lg:rotate-[4deg]",
    },
  ];

  useEffect(() => {
    if (autoRotatePaused) return;

    const timerId = window.setTimeout(() => {
      setSelectedNiche((currentNiche) => {
        const currentIndex = niches.indexOf(currentNiche);
        const nextIndex = currentIndex >= 0 ? currentIndex + 1 : 1;

        return niches[nextIndex % niches.length];
      });
    }, creatorNicheRotationMs);

    return () => window.clearTimeout(timerId);
  }, [autoRotatePaused, selectedNiche]);

  useEffect(() => {
    const previousSelectedNiche = previousSelectedNicheRef.current;

    if (previousSelectedNiche === selectedNiche) return;

    setExitingNiche(previousSelectedNiche);
    previousSelectedNicheRef.current = selectedNiche;

    const timerId = window.setTimeout(() => {
      setExitingNiche((currentNiche) =>
        currentNiche === previousSelectedNiche ? null : currentNiche,
      );
    }, creatorTabFadeMs);

    return () => window.clearTimeout(timerId);
  }, [selectedNiche]);

  return (
    <section
      className="overflow-hidden bg-surface-page px-4 py-10 text-white sm:px-6 lg:px-8"
      id="creator-network"
    >
      <div className={ui.layout.container}>
        <div className={ui.layout.headerWithCopy}>
          <p className={sectionEyebrowClass}>
            Creator network
          </p>
          <h2 className={`mt-3 ${sectionTitleClass} lg:whitespace-nowrap`}>
            Same creator. Different value.
          </h2>
          <p className={`max-w-2xl ${sectionSubtitleClass}`}>
            Switch the niche. The same creator performs differently.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto pb-3">
          <div className="creator-fora-tabs mx-auto">
            {niches.map((niche) => {
              const active = selectedNiche === niche;
              const exiting = exitingNiche === niche;
              return (
                <button
                  aria-pressed={active}
                  className={`creator-fora-tab ${
                    active
                      ? "creator-fora-tab--active text-accent"
                      : exiting
                        ? "creator-fora-tab--exiting text-accent/80"
                        : "text-neutral-400 hover:text-neutral-100"
                  }`}
                  key={niche}
                  onClick={() => {
                    setAutoRotatePaused(false);
                    setSelectedNiche(niche);
                  }}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className={`creator-fora-tab-surface ${
                      active ? "creator-fora-tab-surface--active" : ""
                    } ${exiting ? "creator-fora-tab-surface--exiting" : ""}`}
                  />
                  {active && (
                    <span
                      aria-hidden="true"
                      className={`creator-tab-progress ${
                        autoRotatePaused ? "creator-tab-progress--idle" : ""
                      }`}
                      data-testid="niche-auto-timer"
                      key={niche}
                      style={
                        {
                          "--creator-tab-duration": `${creatorNicheRotationMs}ms`,
                        } as CSSProperties
                      }
                    />
                  )}
                  <span className="relative z-[2]">{nicheTabLabels[niche] ?? niche}</span>
                </button>
              );
            })}
            <span aria-disabled="true" className="creator-fora-tab text-neutral-600">
              + 45 more niches
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-5 grid max-w-[980px] gap-4 py-5 sm:py-6 lg:h-[350px] lg:block lg:py-3">
          {profileCards.map((card) => (
            <CreatorProfileCard
              className={card.orderClass}
              key={`${card.position}-${card.niche}`}
              niche={card.niche}
              position={card.position}
              profile={card.profile}
              value={creatorValues[card.niche]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function formatNicheValue(value: number) {
  return `${value.toFixed(1)}K`;
}

function CreatorProfileCard({
  className = "",
  niche,
  position,
  profile,
  value,
}: {
  className?: string;
  niche: string;
  position: "previous" | "active" | "next";
  profile: {
    avatar?: string;
    bio: string;
    displayName: string;
    followersLabel: string;
    handle: string;
    totalFollowers: number;
  };
  value: number;
}) {
  const active = position === "active";
  const nicheShare = ((value / profile.totalFollowers) * 100).toFixed(1);

  return (
    <article
      className={`signal-gray-panel-frame min-w-0 overflow-hidden text-left transition duration-300 ${
        active
          ? "bg-surface shadow-card"
          : "bg-neutral-950/72 opacity-42 grayscale lg:scale-[0.9]"
      } ${className}`}
      style={
        {
          "--signal-panel-fill": active ? "#0f1011" : "rgb(12 12 13 / 0.78)",
        } as CSSProperties
      }
    >
      <div className="relative">
        <div
          className={`h-[68px] ${
            active ? "bg-neutral-900" : "bg-neutral-900/70"
          }`}
        >
          <div className="flex h-full items-start justify-end px-4 py-3">
            <span className="grid size-7 place-items-center rounded-full bg-neutral-950/65 text-neutral-500">
              <MoreHorizontal className="size-3.5" />
            </span>
          </div>
        </div>

        <div
          className={`absolute left-4 top-[40px] grid place-items-center overflow-hidden rounded-full bg-neutral-800 text-lg font-semibold text-neutral-300 ring-4 ${
            active ? "size-[60px] ring-surface" : "size-[56px] ring-neutral-950"
          }`}
        >
          {profile.avatar ? (
            <img
              alt=""
              className="size-full object-cover"
              draggable={false}
              loading="lazy"
              src={profile.avatar}
            />
          ) : (
            profile.displayName.slice(0, 2)
          )}
        </div>
      </div>

      <div className={`px-4 pb-4 pt-9 ${active ? "sm:px-5 sm:pb-5" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-1.5">
              <h3
                className={`truncate leading-tight ${
                  active ? "text-[1.32rem] text-white" : "text-base text-neutral-200"
                }`}
              >
                {profile.displayName}
              </h3>
              <BadgeCheck
                aria-label="Verified creator"
                className="size-4 shrink-0 text-neutral-500"
              />
            </div>
            <p className="mt-0.5 text-sm leading-5 text-neutral-500">
              {profile.handle}
            </p>
          </div>
          <span
            className="shrink-0 rounded-full bg-white/[0.055] px-3 py-1.5 font-mono text-label font-semibold uppercase tracking-label text-neutral-400"
          >
            Profile
          </span>
        </div>

        <p className="mt-2 line-clamp-1 text-sm leading-5 text-neutral-400">
          {profile.bio}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-neutral-500">
          <span>
            <strong className="font-semibold text-white">
              {profile.followersLabel}
            </strong>{" "}
            followers
          </span>
          <span>
            <strong className="font-semibold text-white">{nicheShare}%</strong>{" "}
            in this niche
          </span>
        </div>

        <div className="mt-3 rounded-xl bg-white/[0.042] px-3.5 py-2.5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-label font-semibold uppercase tracking-label text-neutral-500">
                Niche followers
              </p>
              <p className="mt-0.5 truncate text-sm font-medium leading-snug text-white">
                {niche}
              </p>
            </div>
            {active ? (
              <CountUp
                className="block shrink-0 text-[2rem] font-medium leading-none text-accent sm:text-[2.25rem]"
                decimals={1}
                duration={1}
                from={0}
                suffix="K"
                style={{ fontFamily: titleFontFamily }}
                to={value}
              />
            ) : (
              <span
                className="block shrink-0 text-xl font-medium leading-none text-neutral-300"
                style={{ fontFamily: titleFontFamily }}
              >
                {formatNicheValue(value)}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const frequencyStages = [
  "Max reach",
  "Reach",
  "Reach / Balanced",
  "Balanced",
  "Balanced / Frequency",
  "Frequency",
  "High frequency",
  "Max frequency",
];

const frequencyLabels = ["1×", "2×", "3×", "4×", "5×", "6×", "7×", "8×", "9×", "10×+"];
const staticStandardFrequency = [88, 58, 36, 22, 31, 55, 20, 47, 18, 42];

function clampNumber(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function shuffleArray<T>(items: T[]) {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextItems[index], nextItems[swapIndex]] = [nextItems[swapIndex], nextItems[index]];
  }

  return nextItems;
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
            ? "bg-accent"
            : index < peakIndex
              ? "bg-sky-400/35"
              : "bg-red-300/35";

        return (
          <span className="grid h-full grid-rows-[1fr_auto] items-end gap-1" key={label}>
            <i
              className={`block min-h-2 rounded-t-sm ${barTone}`}
              style={{ height: `${clampNumber(values[index], 8, 92)}%` }}
            />
            <b className="text-center font-mono text-label font-semibold text-neutral-500">
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
  avatars,
  total,
}: {
  accent?: boolean;
  avatars: string[];
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateWidth = () => setContainerWidth(node.clientWidth);
    updateWidth();

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => updateWidth());
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const avatarSize = 32;
  const avatarGap = 6;
  const slotWidth = avatarSize + avatarGap;
  const capacity =
    containerWidth > 0
      ? Math.max(1, Math.floor((containerWidth + avatarGap) / slotWidth))
      : Math.min(12, total);
  const visible = total > capacity ? Math.max(0, capacity - 1) : Math.min(capacity, total);
  const items = avatars.slice(0, visible);

  return (
    <div className="flex flex-nowrap items-center gap-1.5 overflow-hidden" ref={containerRef}>
      {items.map((avatar, index) => {
        if (!accent) {
          return (
            <span
              className="grid size-8 place-items-center rounded-full border border-white/10 bg-neutral-300 text-neutral-500"
              key={`standard-avatar-${index}`}
            >
              <User className="size-4 stroke-[2.1]" />
            </span>
          );
        }

        return (
          <span
            className="block size-8 overflow-hidden rounded-full border border-accent/20 bg-neutral-950/40"
            key={`${avatar}-${index}`}
          >
            <img
              alt=""
              className="size-full object-cover"
              draggable={false}
              loading="lazy"
              src={avatar}
            />
          </span>
        );
      })}
      {total > visible ? (
        <span
          className={`grid size-8 place-items-center rounded-full text-[11px] font-semibold ${
            accent
              ? "bg-accent/10 text-accent"
              : "bg-neutral-300 text-neutral-500"
          }`}
        >
          +{total - visible}
        </span>
      ) : null}
    </div>
  );
}

function CalculatorMetric({
  className = "",
  label,
  tone = "default",
  value,
}: {
  className?: string;
  label: string;
  tone?: "default" | "primary" | "warning" | "good";
  value: React.ReactNode;
}) {
  const valueColorClass =
    tone === "primary"
      ? "text-accent"
      : tone === "warning"
        ? "text-red-300"
        : tone === "good"
          ? "text-emerald-300"
          : "text-white";

  return (
    <div className={`grid h-full min-w-0 content-start ${className}`}>
      <strong className={`block leading-none ${valueColorClass}`}>
        {value}
      </strong>
      <span className="mt-1.5 block min-h-7 overflow-hidden text-label leading-tight text-neutral-500">
        {label}
      </span>
    </div>
  );
}

function ElasticSlider({
  "aria-label": ariaLabel,
  labels,
  maxValue,
  onChange,
  startingValue,
  stepSize = 1,
  value,
}: {
  "aria-label": string;
  labels?: ReactNode;
  maxValue: number;
  onChange: (value: number) => void;
  startingValue: number;
  stepSize?: number;
  value: number;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const totalRange = maxValue - startingValue;
  const percent = totalRange === 0 ? 0 : ((value - startingValue) / totalRange) * 100;

  const updateValue = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { left, width } = slider.getBoundingClientRect();
    const rawProgress = (clientX - left) / width;
    const nextValue =
      Math.round((startingValue + rawProgress * totalRange) / stepSize) * stepSize;

    onChange(clampNumber(nextValue, startingValue, maxValue));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsActive(true);
    updateValue(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      updateValue(event.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsActive(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keySteps: Record<string, number> = {
      ArrowDown: -1,
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: 1,
      PageDown: -5,
      PageUp: 5,
    };

    if (event.key === "Home") {
      event.preventDefault();
      onChange(startingValue);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      onChange(maxValue);
      return;
    }

    const stepMultiplier = keySteps[event.key];
    if (stepMultiplier) {
      event.preventDefault();
      onChange(clampNumber(value + stepMultiplier * stepSize, startingValue, maxValue));
    }
  };

  return (
    <div>
      <motion.div
        animate={{ opacity: isHovered || isActive ? 1 : 0.82 }}
        className="relative"
        onHoverEnd={() => setIsHovered(false)}
        onHoverStart={() => setIsHovered(true)}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <div
          aria-label={ariaLabel}
          aria-valuemax={maxValue}
          aria-valuemin={startingValue}
          aria-valuenow={value}
          className="relative flex h-6 cursor-grab touch-none select-none items-center outline-none active:cursor-grabbing"
          onKeyDown={handleKeyDown}
          onLostPointerCapture={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          ref={sliderRef}
          role="slider"
          tabIndex={0}
        >
          <motion.div
            animate={{
              height: isHovered || isActive ? 12 : 7,
            }}
            className="relative w-full overflow-hidden rounded-full bg-neutral-700/75"
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <motion.div
              animate={{ width: `${percent}%` }}
              className="h-full rounded-full bg-accent"
              transition={{ type: "spring", stiffness: 520, damping: 38 }}
            />
          </motion.div>
          <motion.div
            animate={{
              left: `${percent}%`,
              scale: isActive ? 1.28 : isHovered ? 1.2 : 1,
            }}
            className="absolute top-1/2 z-20 size-4 rounded-full bg-accent"
            style={{ x: "-50%", y: "-50%" }}
            transition={{ type: "spring", stiffness: 520, damping: 34 }}
          />
        </div>
      </motion.div>
      {labels ? <div className="mt-0.5">{labels}</div> : null}
    </div>
  );
}

function CampaignCalculator() {
  const [budget, setBudget] = useState(5);
  const [frequency, setFrequency] = useState(5);
  const [standardOpen, setStandardOpen] = useState(false);
  const [avatarDecks, setAvatarDecks] = useState(() => ({
    standard: shuffleArray(twitterAvatarUrls),
    select: shuffleArray(twitterAvatarUrls),
  }));

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
  const controlledFrequency = getControlledFrequency(frequency);
  const stage = getFrequencyStage(frequency);

  useEffect(() => {
    setAvatarDecks({
      standard: shuffleArray(twitterAvatarUrls),
      select: shuffleArray(twitterAvatarUrls),
    });
  }, [budget]);

  return (
    <Section
      className="relative z-[2] overflow-visible bg-transparent"
      copy="Move the controls. See what you can shape — and what most campaigns leave to chance."
      copyNoWrap
      eyebrow="Plan campaign"
      id="plan-campaign"
      title={
        <>
          <span className="text-accent">Plan your campaign</span> with real
          audience data
        </>
      }
      titleNoWrap
    >
      <div className="signal-gray-panel mt-8 max-w-full overflow-hidden p-3.5 xl:pr-0">
        <div className="grid min-w-0 gap-3.5 xl:grid-cols-[0.52fr_2fr] xl:items-stretch">
          <aside className="min-w-0 rounded-2xl bg-transparent px-5 py-2.5 xl:grid xl:grid-rows-[96px_auto]">
            <div>
              <h3 className="text-2xl font-medium">Campaign inputs</h3>
              <p className="mt-3 font-mono text-xs text-neutral-500">
                Play with controls below
              </p>
            </div>
            <div className="mt-4 grid min-w-0 content-start gap-4 xl:mt-0">
              <label className="block">
                <span className="flex items-baseline justify-between gap-4 text-sm text-neutral-400">
                  Budget
                  <strong className="text-lg font-medium text-white">${budget}K</strong>
                </span>
                <ElasticSlider
                  aria-label="Budget"
                  maxValue={50}
                  onChange={setBudget}
                  startingValue={5}
                  stepSize={1}
                  value={budget}
                />
              </label>
              <label className="block">
                <span className="flex items-baseline justify-between gap-4 text-sm text-neutral-400">
                  Audience frequency
                  <strong className="text-lg font-medium text-white">{frequency}×</strong>
                </span>
                <ElasticSlider
                  aria-label="Audience frequency"
                  labels={
                    <span className="grid grid-cols-3 items-start font-mono text-label uppercase leading-tight tracking-label text-neutral-600">
                      <span className="text-left">
                        Max
                        <br />
                        reach
                      </span>
                      <span>Balanced</span>
                      <span className="text-right">
                        Max
                        <br />
                        frequency
                      </span>
                    </span>
                  }
                  maxValue={8}
                  onChange={setFrequency}
                  startingValue={1}
                  stepSize={1}
                  value={frequency}
                />
              </label>
              <p className="mt-5 text-sm leading-6 text-neutral-300">
                Inside the optimizer there are 20+ unique parameters for selecting
                the best influencer lineup.
              </p>
            </div>
          </aside>

          <button
            aria-expanded={standardOpen}
            className="flex min-h-12 items-center justify-between rounded-2xl bg-neutral-900 px-4 text-left text-sm font-medium text-white xl:hidden"
            onClick={() => setStandardOpen((value) => !value)}
            type="button"
          >
            Compare to standard approach {standardOpen ? "↑" : "↓"}
          </button>

          <div className="grid min-w-0 gap-3.5 xl:border-l xl:border-neutral-800/80 xl:pl-3.5 xl:grid-cols-2 xl:items-stretch xl:[grid-template-rows:minmax(112px,auto)_32px_32px_minmax(148px,auto)_auto]">
            <section
              className={`min-w-0 gap-3 rounded-card bg-transparent py-2.5 xl:row-span-5 xl:gap-y-0 xl:[grid-template-rows:subgrid] ${
                standardOpen ? "grid" : "hidden xl:grid"
              }`}
            >
              <div className="flex h-full min-w-0 flex-col px-5">
                <h3 className="text-2xl font-medium">Standard approach</h3>
                <div className="mt-5 grid flex-1 grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-[0.72fr_0.72fr_1fr_1fr] sm:gap-y-0">
                  <CalculatorMetric label="Creators" value={<AnimatedNumber fontSize={28} value={agencyCreators} />} />
                  <CalculatorMetric label="Posts" value={<AnimatedNumber fontSize={28} value={agencyPosts} />} />
                  <CalculatorMetric
                    label="Estimated relevant audience"
                    tone="primary"
                    value={
                      <AnimatedNumber
                        fontSize={28}
                        prefix="~"
                        suffix="K"
                        value={Math.max(1, agencyRelevant)}
                      />
                    }
                  />
                  <CalculatorMetric
                    label="Wasted budget"
                    tone="warning"
                    value={<AnimatedNumber fontSize={28} prefix="$" value={agencyWaste} />}
                  />
                </div>
              </div>
              <div className="mx-5 flex h-full min-w-0 items-center justify-between gap-3.5 border-t border-neutral-800/80 py-1 leading-none text-sm text-neutral-400">
                <span>Frequency control</span>
                <b className="font-medium text-red-200">not controlled</b>
              </div>
              <div className="mx-5 flex h-full min-w-0 items-center justify-between gap-3.5 border-t border-neutral-800/80 py-1 leading-none text-sm text-neutral-400">
                <span>Overlap</span>
                <b className="font-medium text-red-200">not measured</b>
              </div>
              <div className="mx-5 flex h-full min-w-0 flex-col border-t border-neutral-800/80 py-2.5">
                <div className="flex items-start justify-between gap-3.5">
                  <p className="text-sm font-medium text-white">Uncontrolled frequency</p>
                  <p className="text-sm font-medium text-red-200">Random Distribution</p>
                </div>
                <div className="mt-2">
                  <FrequencyChart values={staticStandardFrequency} />
                </div>
                <p className="mt-1 font-mono text-xs text-neutral-500">
                  Frequency happens, but it is not controlled.
                </p>
              </div>
              <div className="flex h-full min-w-0 flex-col justify-center px-5 pt-2 pb-0">
                <p className="whitespace-nowrap text-sm font-medium text-neutral-300">
                  Selected creators ({agencyCreators})
                </p>
                <div className="mt-2">
                  <AvatarStack avatars={avatarDecks.standard} total={agencyCreators} />
                </div>
              </div>
            </section>

            <BorderGlow
              animated
              backgroundColor="#221f16"
              borderRadius={28}
              className="grid h-full min-w-0 gap-3 xl:-my-3.5 xl:row-span-5 xl:gap-y-0 xl:[grid-template-rows:subgrid] xl:py-2.5"
              colors={[ui.colors.accent, "#6FACFF", "#A05FFF"]}
              coneSpread={16}
              edgeSensitivity={24}
              fillOpacity={0}
              glowColor="48 92 58"
              glowIntensity={0.9}
              glowRadius={28}
            >
              <div className="flex h-full min-w-0 flex-col px-5 xl:pt-3.5">
                <h3 className="text-2xl font-medium">Wallchain Select</h3>
                <div className="mt-5 grid flex-1 grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-[0.72fr_0.72fr_1fr_1fr] sm:gap-y-0">
                  <CalculatorMetric label="Optimized creators" value={<AnimatedNumber fontSize={28} value={selectCreators} />} />
                  <CalculatorMetric label="Posts" value={<AnimatedNumber fontSize={28} value={selectPosts} />} />
                  <CalculatorMetric
                    label="Relevant audience"
                    tone="primary"
                    value={<AnimatedNumber fontSize={28} suffix="K" value={Math.max(1, reach)} />}
                  />
                  <CalculatorMetric
                    label="Working budget"
                    tone="good"
                    value={<AnimatedNumber fontSize={28} prefix="$" value={selectWorking} />}
                  />
                </div>
              </div>
              <div className="mx-5 flex h-full min-w-0 items-center justify-between gap-3.5 border-t border-accent/15 py-1 leading-none text-sm text-neutral-300">
                <span>Frequency control</span>
                <b className="min-w-0 text-right font-medium leading-tight text-accent">{stage.label}</b>
              </div>
              <div className="mx-5 flex h-full min-w-0 items-center justify-between gap-3.5 border-t border-accent/15 py-1 leading-none text-sm text-neutral-300">
                <span>Overlap</span>
                <b className="min-w-0 text-right font-medium leading-tight text-accent">{stage.overlap}% controlled</b>
              </div>
              <div className="mx-5 flex h-full min-w-0 flex-col border-t border-accent/15 py-2.5">
                <div className="flex min-w-0 items-start justify-between gap-3.5">
                  <p className="text-sm font-medium text-white">Controlled frequency</p>
                  <p className="min-w-0 text-right text-sm font-medium leading-tight text-accent">Target Distribution</p>
                </div>
                <div className="mt-2">
                  <FrequencyChart
                    controlled
                    peakIndex={controlledFrequency.peakIndex}
                    values={controlledFrequency.values}
                  />
                </div>
                <p className="mt-1 font-mono text-xs text-neutral-500">
                  Frequency is planned around your target.
                </p>
              </div>
              <div className="flex h-full min-w-0 flex-col justify-center px-5 pt-2 pb-0">
                <p className="whitespace-nowrap text-sm font-medium text-neutral-300">
                  Selected creators ({selectCreators})
                </p>
                <div className="mt-2">
                  <AvatarStack accent avatars={avatarDecks.select} total={selectCreators} />
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center">
        <ActionLink href="#plan-campaign">Analyze my campaign</ActionLink>
        <ActionLink href="#call" variant="secondary">
          Book a call
        </ActionLink>
        <p className={sectionEyebrowClass}>
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
      label: "cheaper per niche audience reader",
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
      ctaLabel="View report"
      ctaTitle="Full creator campaign report for Prediction Markets"
      eyebrow="Numbers from real campaigns"
      id="proof"
      stats={stats}
      title="Optimization changes what the same budget can buy."
    />
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`${ui.layout.container} border-t border-white/10`} />
      </div>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className={`${ui.layout.container} grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start`}>
          <div className="flex max-w-md flex-col lg:min-h-[108px] lg:justify-between">
          <a
            aria-label="Wallchain home"
            className="inline-flex items-center transition-opacity duration-200 hover:opacity-100"
            href="#top"
          >
            <img
              alt="Wallchain"
              className="h-8 w-auto opacity-90"
              decoding="async"
              src={wallchainLogoUrl}
            />
          </a>
          <p className="mt-4 text-sm leading-6 text-neutral-400 lg:mt-0">
            © {year} Wallchain. Precision creator campaigns for crypto teams.
          </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className={sectionEyebrowClass}>
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="text-sm text-neutral-300 transition-colors duration-200 hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  useSmoothAnchorScroll();
  useSignalPanelPointerGlow();

  return (
    <main className="min-h-screen bg-neutral-950 text-white" id="top">
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
      <Footer />
    </main>
  );
}
