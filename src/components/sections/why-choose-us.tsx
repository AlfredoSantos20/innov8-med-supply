import { Award, Clock, HeartPulse, Layers, ShieldCheck, Truck } from "lucide-react";
import { FeatureCard, StatCard } from "@/components/ui/brand-cards";
import { Section, SectionHeader } from "@/components/ui/section";
import { STATS } from "@/constants/site";

const FEATURES = [
  { icon: ShieldCheck, title: "Certified Quality", body: "FDA-licensed and ISO 9001:2015 certified across our supply chain." },
  { icon: Truck, title: "Nationwide Logistics", body: "Cold-chain capable distribution across 17 regions, island to island." },
  { icon: Clock, title: "On-time Delivery", body: "99.4% on-time fulfillment for hospitals, clinics, and institutions." },
  { icon: Layers, title: "Deep Inventory", body: "Thousands of SKUs across diagnostics, PPE, surgical and respiratory." },
  { icon: HeartPulse, title: "Clinical Standards", body: "Equipment that meets the demands of modern healthcare environments." },
  { icon: Award, title: "Trusted Since 2010", body: "15+ years partnering with the Philippine healthcare community." },
];

export function WhyChooseUs() {
  return (
    <Section className="relative">
      <SectionHeader
        eyebrow="Why choose us"
        title="A medical partner you can rely on"
        description="We combine clinical-grade sourcing with enterprise logistics — engineered to keep healthcare moving."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title}>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-button text-white shadow-glow">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
          </FeatureCard>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </Section>
  );
}
