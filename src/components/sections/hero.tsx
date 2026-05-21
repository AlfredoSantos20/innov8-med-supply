import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { BrandButton } from "@/components/ui/brand-button";
import { COMPANY } from "@/constants/site";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const full = `Medical supplies,\ndelivered nationwide.`;
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (idx < full.length) {
        t = setTimeout(() => setIdx((v) => v + 1), 55);
      } else {
        t = setTimeout(() => setDeleting(true), 1200);
      }
    } else {
      if (idx > 0) {
        t = setTimeout(() => setIdx((v) => v - 1), 35);
      } else {
        t = setTimeout(() => setDeleting(false), 500);
      }
    }
    return () => clearTimeout(t);
  }, [idx, deleting, full.length]);

  const typed = full.slice(0, idx);
  const parts = typed.split('\n');
  const firstLine = parts[0] ?? '';
  const secondLine = parts[1] ?? '';

  useEffect(() => {
    const onScroll = () => {
      const top = typeof window !== 'undefined' ? window.scrollY <= 2 : true;
      setAtTop((prev) => (prev !== top ? top : prev));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (atTop) {
      setIdx(0);
      setDeleting(false);
      setResetKey((k) => k + 1);
    }
  }, [atTop]);

  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/bgher.png"
          alt="Hero background"
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-emerald/20 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-teal/30 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-14 md:grid-cols-2 md:py-20">
        <div className="animate-fade-up ml-6 md:ml-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Established {COMPANY.established} · Nationwide
          </div>

          <motion.div
            className="relative"
            key={resetKey}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground md:text-6xl opacity-0 select-none pointer-events-none">
              Medical supplies, <br />
              <span className="text-gradient-brand">delivered nationwide.</span>
            </h1>
            <h1 className="text-4xl font-bold leading-[1.05] text-foreground md:text-6xl absolute left-0 top-0">
              <span>{firstLine}</span>
              <br />
              <span className="text-gradient-brand">{secondLine}</span>
            </h1>
          </motion.div>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {COMPANY.short} is the Philippines&apos; trusted B2B distributor of professional
            healthcare equipment and medical disposables — supplying hospitals, clinics
            and institutions from Luzon to Mindanao.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products">
              <BrandButton variant="gradient" size="lg">
                Browse Products <ArrowRight className="h-4 w-4" />
              </BrandButton>
            </Link>
            <Link to="/contact">
              <BrandButton variant="outline" size="lg">Inquire Now</BrandButton>
            </Link>
          </div>

        </div>

        
      </div>
    </section>
  );
}


