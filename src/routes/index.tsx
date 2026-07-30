import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import logo from "@/assets/isiyalo-logo.png";
import rainWindow from "@/assets/rain-window.jpg.asset.json";
import blossoms from "@/assets/blossoms.jpg";
import heroVideo from "@/assets/sakura_hero_30s.mp4";
import VariableProximity from "@/components/VariableProximity";
import TrueFocus from "@/components/TrueFocus";
import BlurText from "@/components/BlurText";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { PlaceCard } from "@/components/ui/card-22";
import FallingSakura from "@/components/FallingSakura";
import HoverImageReveal from "@/components/HoverImageReveal";
import communityBg from "@/assets/community-bg.jpg";
import Particles from "@/components/Particles";
import Galaxy from "@/components/Galaxy";
import DotField from "@/components/DotField";
import Stepper, { Step } from "@/components/Stepper";
import GooeyNav from "@/components/GooeyNav";
import AnimatedContent from "@/components/AnimatedContent";
import InstagramFillIcon from "@/components/InstagramFillIcon";
import FacebookFillIcon from "@/components/FacebookFillIcon";
import YoutubeFillIcon from "@/components/YoutubeFillIcon";
import StarfieldBackground from "@/components/StarfieldBackground";
import reachOutBg from "@/assets/reachout.jpg";
import coreServeBg from "@/assets/coreserve.jpg";
import "sakura-js/dist/sakura.css";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: reachOutBg,
      },
      {
        rel: "preload",
        as: "image",
        href: coreServeBg,
      },
    ],
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--2ac72736-7108-4f90-85f5-7311291590e0.lovable.app" + heroBg.url,
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--2ac72736-7108-4f90-85f5-7311291590e0.lovable.app" + heroBg.url,
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero scrollY={scrollY} />
      <Statement />
      <Services />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#community", label: "Community" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 sm:gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          <img
            src={logo}
            alt="Isiyalo Logo"
            className="h-8 sm:h-9 w-auto object-contain brightness-0"
          />
          <span>
            Isiyalo<span className="hidden xs:inline sm:inline"> Wellness</span>
          </span>
        </a>
        <div className="hidden md:block">
          <GooeyNav
            items={links}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
          />
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground shadow transition hover:bg-primary/90 md:inline-flex"
        >
          Book a session
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border bg-secondary px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-border bg-card p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.24em] text-foreground hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground shadow"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ scrollY }: { scrollY: number }) {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Interactive Particles Background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Particles
          particleColors={["#ffffff", "#fbcfe8", "#ffffff"]}
          particleCount={250}
          particleSpread={12}
          speed={0.12}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Atmospheric wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_80%)] pointer-events-none" />

      {/* Logo — top center just below navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-16 sm:top-20 z-20 flex justify-center">
        <img
          src={logo}
          alt="Isiyalo Wellness Centre"
          className="h-20 sm:h-28 w-auto animate-mask-reveal opacity-95 drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)] md:h-40"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-end px-4 sm:px-6 pb-16 sm:pb-24 pt-36 sm:pt-48 md:pt-72 text-center">
        <p
          className="animate-fade-up font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/90"
          style={{ animationDelay: "0.2s" }}
        >
          Soweto · Estd 2023
        </p>
        <h1
          className="animate-fade-up mt-4 sm:mt-6 max-w-4xl text-3xl sm:text-5xl font-medium leading-[1.08] sm:leading-[1.02] text-white md:text-7xl"
          style={{ animationDelay: "0.35s" }}
        >
          <VariableProximity
            label="A partner in wellness,"
            className="variable-proximity-hero-1"
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={200}
            falloff="linear"
          />
          <br />
          <span style={{ fontFamily: "var(--font-body)" }} className="italic font-normal">
            <VariableProximity
              label="rooted in compassion."
              className="variable-proximity-hero-2"
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 800, 'opsz' 40"
              containerRef={containerRef}
              radius={200}
              falloff="linear"
              style={{ fontFamily: "'Roboto Flex', sans-serif" }}
            />
          </span>
        </h1>
        <p
          className="animate-fade-up mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/85 md:text-lg"
          style={{ fontFamily: "var(--font-body)", animationDelay: "0.5s" }}
        >
          Practice support, counselling, and community mental health, held in a welcoming space
          where care meets excellence.
        </p>
        <div
          className="animate-fade-up mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto px-4 sm:px-0"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-900 transition hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto"
          >
            Book a session
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white/10 w-full sm:w-auto"
          >
            Explore services →
          </a>
        </div>

        {/* Bottom meta strip */}
        <div
          className="animate-fade-up mt-12 sm:mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:gap-6 border-t border-white/25 pt-6 text-left md:grid-cols-4"
          style={{ animationDelay: "0.85s" }}
        >
          {[
            ["01 —", "Practice Care"],
            ["02 —", "Counselling"],
            ["03 —", "Community"],
            ["04 —", "Workshops"],
          ].map(([n, t]) => (
            <div key={t}>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-white/70">
                {n}
              </div>
              <div
                className="mt-1 text-xs sm:text-sm text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <TrueFocus
                  sentence={t}
                  manualMode={false}
                  blurAmount={2}
                  borderColor="white"
                  glowColor="rgba(255, 255, 255, 0.3)"
                  animationDuration={0.4}
                  pauseBetweenAnimations={1.5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Statement() {
  return (
    <section
      id="our-statement"
      className="relative isolate overflow-hidden border-t border-border py-16 sm:py-28"
    >
      <span id="about" className="absolute -top-24" />
      <FallingSakura petalCount={35} />
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 animate-shimmer"
        style={{
          backgroundImage: `url(${blossoms})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-left">
        <Reveal>
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            § Our Statement
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-5xl leading-[1.25] sm:leading-[1.2] tracking-tight text-foreground font-medium max-w-4xl">
            <BlurText
              text="We empower psychology practitioners through reliable onsite and remote administration and we hold space for the community, freely, where it matters most."
              delay={35}
              animateBy="words"
              direction="bottom"
              className="inline-flex flex-wrap"
            />
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Isiyalo Wellness Centre in Soweto is a welcoming, fully furnished home for professionals
            delivering quality mental health care. We believe support should be accessible,
            compassionate, and rooted in excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const serviceCards = [
    {
      title: "Practice Administration",
      hostType: "Onsite & Remote",
      dateRange: "Mon - Sat Care",
      rating: 5.0,
      tags: ["Admin Support", "Billing & Scheduling"],
      isTopRated: true,
      description:
        "Reliable onsite and remote billing, client scheduling, and operational care tailored for psychology practitioners.",
      pricePerNight: "Custom Plan",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Consulting Spaces",
      hostType: "Soweto Wellness Facility",
      dateRange: "Flexible Suites",
      rating: 4.9,
      tags: ["Workspaces", "Private Rooms"],
      isTopRated: true,
      description:
        "A fully equipped, beautifully furnished environment designed specifically for mental health professionals.",
      pricePerNight: "Hourly / Daily",
      images: [
        "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Clinical Counselling",
      hostType: "Licensed Practitioners",
      dateRange: "By Appointment",
      rating: 5.0,
      tags: ["Individual & Family", "Clinical Care"],
      isTopRated: true,
      description:
        "Comprehensive clinical psychology and compassionate counselling tailored for individuals, couples, and families.",
      pricePerNight: "Sliding Scale",
      images: [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Workshops & Programs",
      hostType: "Community Outreach",
      dateRange: "Monthly Sessions",
      rating: 4.9,
      tags: ["Trauma Recovery", "Resilience"],
      isTopRated: false,
      description:
        "Impactful community programs and interactive workshops focusing on trauma recovery, parenting, and emotional wellness.",
      pricePerNight: "Community Care",
      images: [
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden border-t border-border py-16 sm:py-28"
    >
      {/* Full background image - coreserve.jpg */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coreServeBg})` }}
      />
      {/* Soft overlay so background image is fully visible and vibrant */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background/50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={1.0}
          ease="power3.out"
          threshold={0.1}
        >
          <div className="text-center">
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              § Core Services
            </div>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
              Care held with structure,
              <br />
              <span style={{ fontFamily: "var(--font-body)" }} className="italic font-normal">
                delivered with warmth.
              </span>
            </h2>
          </div>
        </AnimatedContent>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center w-full">
          {serviceCards.map((card, idx) => (
            <AnimatedContent
              key={idx}
              distance={100}
              direction="vertical"
              delay={idx * 0.15}
              duration={0.9}
              ease="power3.out"
              threshold={0.1}
              className="w-full"
            >
              <PlaceCard
                images={card.images}
                tags={card.tags}
                rating={card.rating}
                title={card.title}
                dateRange={card.dateRange}
                hostType={card.hostType}
                isTopRated={card.isTopRated}
                description={card.description}
                pricePerNight={card.pricePerNight}
                buttonText="Inquire"
                className="h-full max-w-full"
              />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  const communityItems = {
    itemCount: 5,
    item1: {
      text: "PROTEA GLEN ",
      image: {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
        alt: "Protea Glen Community",
      },
    },
    item2: {
      text: "SANDTON",
      image: {
        src: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop",
        alt: "Sandton Community",
      },
    },
    item3: {
      text: "JOHANNESBURG ",
      image: {
        src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
        alt: "Johannesburg Community",
      },
    },
    item4: {
      text: "CAPETOWN ",
      image: {
        src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
        alt: "Capetown Community Care",
      },
    },
    item5: {
      text: "ROSEBANK ",
      image: {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
        alt: "Rosebank Community Care",
      },
    },
  };

  return (
    <section
      id="community"
      className="relative isolate overflow-hidden border-t border-border py-20 sm:py-28 bg-[#0a0a0f]"
    >
      {/* Dynamic Starfield Canvas Background */}
      <div className="absolute inset-0 -z-20">
        <StarfieldBackground count={400} speed={0.5} starColor="#ffffff" twinkle />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-8 sm:mb-10">
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white/80">
              § Community Engagement
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.08] tracking-tight text-white max-w-4xl mx-auto">
              Beyond private practice
              <br />
              <span
                style={{ fontFamily: "var(--font-body)" }}
                className="italic font-normal text-white"
              >
                we are a bridge to Soweto.
              </span>
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-white/90"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Isiyalo actively offers space and expertise, to support community mental health
              initiatives, strengthening the professional ecosystem and the wellbeing of families
              across Soweto.
            </p>
          </div>
        </Reveal>

        <div className="w-full relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center">
          <HoverImageReveal
            items={communityItems}
            textColor="#FFFFFF"
            dimColor="#FC72B9"
            rowGap={40}
            imageWidth={360}
            imageHeight={480}
            rounded={43}
            followStrength={8}
            transition={{ mass: 1, type: "spring", damping: 40, stiffness: 400 }}
            align="center"
          />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center font-mono text-xs uppercase tracking-[0.24em] text-white/70">
            36204 Copper Street, Protea Glen Ext 35
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Clinical Counselling",
    message: "",
  });

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Enquiry for ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Service Requested: ${formData.service}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}\n\n— ${formData.name} (${formData.email})`,
    );
    window.location.href = `mailto:isiyalowellnesscentre@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border py-16 sm:py-28"
    >
      {/* Full background image - reachout.jpg with zero overlay or blur */}
      <div
        className="absolute inset-0 -z-20 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${reachOutBg})` }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1.0}
          ease="power3.out"
          threshold={0.1}
          delay={0.1}
        >
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-slate-700 font-semibold">
            § Reach Out
          </div>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-6xl tracking-tight font-medium text-slate-900">
            Begin the conversation.
          </h2>
        </AnimatedContent>

        <AnimatedContent
          distance={120}
          direction="vertical"
          delay={0.25}
          duration={1.1}
          ease="power3.out"
          threshold={0.1}
          className="mt-8 sm:mt-12 text-left"
        >
          <Stepper
            initialStep={1}
            backButtonText="Previous"
            nextButtonText="Continue"
            onFinalStepCompleted={handleSubmit}
            stepCircleContainerClassName="!bg-white/95 !border-slate-200/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            backButtonProps={{ className: "!border-slate-300 !text-slate-800 hover:!bg-slate-100" }}
            nextButtonProps={{ className: "!bg-slate-900 !text-white hover:!bg-slate-800" }}
          >
            <Step>
              <div className="space-y-4 py-2">
                <h3 className="text-xl font-medium text-slate-900">1. Your Contact Details</h3>
                <p
                  className="text-xs sm:text-sm text-slate-700"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Please share your details so we can get back to you promptly.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-800 focus:ring-1 focus:ring-slate-800/40"
                  />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-800 focus:ring-1 focus:ring-slate-800/40"
                  />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone Number (Optional)"
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-800 focus:ring-1 focus:ring-slate-800/40"
                />
              </div>
            </Step>

            <Step>
              <div className="space-y-4 py-2">
                <h3 className="text-xl font-medium text-slate-900">2. Select a Service</h3>
                <p
                  className="text-xs sm:text-sm text-slate-700"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Which service or inquiry type are you looking for?
                </p>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Clinical Counselling",
                    "Practice Administration",
                    "Consulting Spaces",
                    "Workshops & Community Care",
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setFormData({ ...formData, service })}
                      className={`rounded-xl border p-3.5 text-left text-xs font-mono tracking-wider transition ${
                        formData.service === service
                          ? "border-slate-900 bg-slate-900 text-white font-semibold shadow-md"
                          : "border-slate-200 bg-white/60 text-slate-700 hover:border-slate-400 hover:text-slate-900"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-4 py-2">
                <h3 className="text-xl font-medium text-slate-900">3. Your Message</h3>
                <p
                  className="text-xs sm:text-sm text-slate-700"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Tell us a bit about how we can support you.
                </p>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we support you?"
                  className="w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-800 focus:ring-1 focus:ring-slate-800/40"
                />
              </div>
            </Step>

            <Step>
              <div className="py-4 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white text-xl font-bold border border-slate-900 shadow-md">
                  ✓
                </div>
                <h3 className="text-2xl font-medium text-slate-900">Ready to Send!</h3>
                <p
                  className="text-sm text-slate-700 max-w-md mx-auto"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Click Complete below to launch your email client or reach out directly via:
                </p>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-semibold pt-2">
                  +27 81 346 8914 · isiyalowellnesscentre@gmail.com
                </div>
              </div>
            </Step>
          </Stepper>
        </AnimatedContent>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 py-8 sm:py-10 md:flex-row md:items-center">
        <div>
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Isiyalo Management · Trading as Isiyalo Wellness
          </div>
          <div className="mt-1 text-xs sm:text-sm" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Soweto, South Africa.
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em]">
          <a
            href="https://web.facebook.com/Isiyalowellnesscentre"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-foreground transition hover:border-white/60 hover:bg-white/10 hover:text-white shadow-sm"
            aria-label="Facebook Isiyalowellnesscentre"
          >
            <FacebookFillIcon size={18} color="currentColor" />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/isiyalo_wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-foreground transition hover:border-white/60 hover:bg-white/10 hover:text-white shadow-sm"
            aria-label="Instagram @isiyalo_wellness"
          >
            <InstagramFillIcon size={18} color="currentColor" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@IsiyaloOverflow/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-foreground transition hover:border-white/60 hover:bg-white/10 hover:text-white shadow-sm"
            aria-label="YouTube @IsiyaloOverflow"
          >
            <YoutubeFillIcon size={18} color="currentColor" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
