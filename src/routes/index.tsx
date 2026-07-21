import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import logo from "@/assets/isiyalo-logo.png";
import rainWindow from "@/assets/rain-window.jpg.asset.json";
import blossoms from "@/assets/blossoms.jpg";
import heroVideo from "@/assets/Isiyalo hero.mp4";
import VariableProximity from "@/components/VariableProximity";
import TrueFocus from "@/components/TrueFocus";
import BlurText from "@/components/BlurText";
import "sakura-js/dist/sakura.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--2ac72736-7108-4f90-85f5-7311291590e0.lovable.app" + heroBg.url },
      { name: "twitter:image", content: "https://id-preview--2ac72736-7108-4f90-85f5-7311291590e0.lovable.app" + heroBg.url },
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
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/90 mix-blend-difference">
          Isiyalo / Wellness
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/90 mix-blend-difference transition-opacity hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white mix-blend-difference transition hover:bg-white/10 md:inline-flex"
        >
          Book a session
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white mix-blend-difference md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="mx-4 rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ scrollY }: { scrollY: number }) {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Background — video playing in loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroBg.url}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{
          transform: `translate3d(0, ${scrollY * 0.15}px, 0) scale(1.08)`,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Atmospheric wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-black/10 to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.15)_70%)]" />

      {/* Logo — top center just below navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-20 flex justify-center">
        <img
          src={logo}
          alt="Isiyalo Wellness Centre"
          className="h-28 w-auto animate-mask-reveal opacity-95 drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)] md:h-40"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-end px-6 pb-24 pt-64 text-center md:pt-72">
        <p
          className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.32em] text-white/90"
          style={{ animationDelay: "0.2s" }}
        >
          Soweto · Estd 2023
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-4xl text-5xl font-medium leading-[1.02] text-white md:text-7xl"
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
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          style={{ fontFamily: "var(--font-body)", animationDelay: "0.5s" }}
        >
          Practice support, counselling, and community mental health — held in a
          welcoming space where care meets excellence.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-900 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book a session
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
          >
            Explore services →
          </a>
        </div>

        {/* Bottom meta strip */}
        <div
          className="animate-fade-up mt-16 grid w-full max-w-4xl grid-cols-2 gap-6 border-t border-white/25 pt-6 text-left md:grid-cols-4"
          style={{ animationDelay: "0.85s" }}
        >
          {[
            ["01 —", "Practice Care"],
            ["02 —", "Counselling"],
            ["03 —", "Community"],
            ["04 —", "Workshops"],
          ].map(([n, t]) => (
            <div key={t}>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">{n}</div>
              <div className="mt-1 text-white" style={{ fontFamily: "var(--font-body)" }}>
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
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
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
  useEffect(() => {
    let sakuraInstance: any = null;
    import("sakura-js").then((mod) => {
      const Sakura = (mod as any).default?.default || (mod as any).default || mod;
      if (typeof Sakura === "function") {
        sakuraInstance = new Sakura("#sakura-container", {
        fallSpeed: 1.8,
        delay: 550,
        lifeTime: 12000,
        minSize: 8,
        maxSize: 16,
        colors: [
          {
            gradientColorStart: "rgba(255,230,242,.95)",
            gradientColorEnd: "rgba(255,182,210,.85)",
            gradientColorDegree: 120,
          },
          {
            gradientColorStart: "rgba(255,240,250,.9)",
            gradientColorEnd: "rgba(240,200,255,.8)",
            gradientColorDegree: 120,
          },
          {
            gradientColorStart: "rgba(255,255,255,.9)",
            gradientColorEnd: "rgba(255,220,240,.8)",
            gradientColorDegree: 120,
          },
        ],
      });
    }
  });

    return () => {
      if (sakuraInstance) {
        sakuraInstance.stop();
      }
    };
  }, []);

  return (
    <section id="about" className="relative isolate overflow-hidden border-t border-border py-28">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 animate-shimmer"
        style={{
          backgroundImage: `url(${blossoms})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay: clear on the top-right, fading to opaque background color on the left where the text is */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />

      {/* Sakura container for falling petals */}
      <div id="sakura-container" className="absolute inset-0 -z-5 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 text-left">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            § Our Statement
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-3xl leading-[1.2] tracking-tight text-foreground md:text-5xl font-medium max-w-4xl">
            <BlurText
              text="We empower psychology practitioners through reliable onsite and remote administration — and we hold space for the community, freely, where it matters most."
              delay={35}
              animateBy="words"
              direction="bottom"
              className="inline-flex flex-wrap"
            />
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Isiyalo Wellness Centre in Soweto is a welcoming, fully furnished
            home for professionals delivering quality mental health care. We
            believe support should be accessible, compassionate, and rooted in
            excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      title: "Practice Administration",
      body: "Reliable onsite and remote billing and admin for psychology practitioners.",
    },
    {
      n: "02",
      title: "Consulting Space",
      body: "A fully equipped, furnished environment for mental health professionals.",
    },
    {
      n: "03",
      title: "Clinical Counselling",
      body: "Clinical psychology and counselling for individuals, couples, and families.",
    },
    {
      n: "04",
      title: "Workshops & Programs",
      body: "Community programs on trauma, parenting, and resilience.",
    },
  ];
  return (
    <section id="services" className="relative border-t border-border bg-secondary/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                § Core Services
              </div>
              <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Care held with structure,
                <br />
                <span style={{ fontFamily: "var(--font-body)" }} className="italic">
                  delivered with warmth.
                </span>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {s.n} — Service
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="text-2xl md:text-3xl">{s.title}</h3>
                  <p
                    className="mt-3 text-base leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="relative border-t border-border py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={blossoms.url}
              alt="Spring blossoms"
              className="h-[520px] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                Isiyalo Wellness Centre · Estd 2023
              </div>
              <div className="mt-1 text-white" style={{ fontFamily: "var(--font-body)" }}>
                36204 Copper Street, Protea Glen Ext 35, Soweto
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              § Community Engagement
            </div>
            <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Beyond private practice —
              <span style={{ fontFamily: "var(--font-body)" }} className="italic">
                {" "}
                a bridge to Soweto.
              </span>
            </h2>
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Isiyalo actively contributes to society by offering space and
              expertise — sometimes free of charge — to support community mental
              health initiatives, strengthening the professional ecosystem and
              the wellbeing of families.
            </p>
            <ul className="mt-8 space-y-3">
              {["Trauma recovery circles", "Parenting workshops", "Resilience programs"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-foreground/40" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em]">{t}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-border py-28">
      <div
        className="absolute inset-0 -z-10 opacity-40 animate-shimmer"
        style={{
          backgroundImage: `url(${rainWindow.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-sm" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            § Reach Out
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Begin the conversation.
          </h2>
        </Reveal>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Enquiry from ${data.get("name")}`);
            const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
            window.location.href = `mailto:isiyalowellnesscentre@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 text-left"
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Name"
              className="w-full rounded-full border border-border bg-card px-5 py-4 text-sm outline-none transition focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-full border border-border bg-card px-5 py-4 text-sm outline-none transition focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10"
            />
          </div>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="How can we support you?"
            className="w-full rounded-3xl border border-border bg-card px-5 py-4 text-sm outline-none transition focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10"
          />
          <div className="mt-2 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              +27 81 346 8914 · isiyalowellnesscentre@gmail.com
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-background transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Isiyalo Management · Trading as Isiyalo Wellness
          </div>
          <div className="mt-1 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} — Soweto, South Africa.
          </div>
        </div>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.22em]">
          <a href="#" className="hover:opacity-70">Isiyalo Wellness</a>
          <a href="#" className="hover:opacity-70">Isiyalo_Wellness</a>
          <a href="#" className="hover:opacity-70">Isiyalo_Overflow</a>
        </div>
      </div>
    </footer>
  );
}
