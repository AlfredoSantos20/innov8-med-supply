import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";
import { BrandButton } from "@/components/ui/brand-button";
import { COMPANY } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero animate-gradient" />
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
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Established {COMPANY.established} · Nationwide
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Medical supplies, <br />
            <span className="text-gradient-brand">delivered nationwide.</span>
          </h1>

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
              <BrandButton variant="outline" size="lg">Request a Quote</BrandButton>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald" /> FDA Licensed</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-emerald" /> 17 Regions Covered</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald" /> ISO 9001:2015</div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-button opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-white shadow-glow">
            <img
              src={heroImg}
              alt="Professional medical supplies and equipment"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-white/90 p-4 shadow-soft backdrop-blur md:block">
            <div className="text-2xl font-bold text-gradient-brand">1,200+</div>
            <div className="text-xs text-muted-foreground">Healthcare partners</div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-white/90 p-4 shadow-soft backdrop-blur md:block">
            <div className="text-2xl font-bold text-gradient-brand">99.4%</div>
            <div className="text-xs text-muted-foreground">On-time delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
