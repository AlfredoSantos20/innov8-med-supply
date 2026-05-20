import { Award, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/ui/brand-cards";
import { Section, SectionHeader } from "@/components/ui/section";

const CERTS = [
  { icon: ShieldCheck, title: "FDA Philippines", body: "Licensed medical device distributor under the Food and Drug Administration." },
  { icon: BadgeCheck, title: "ISO 9001:2015", body: "Quality management systems certified for our operations and supply chain." },
  { icon: FileCheck2, title: "DOH Accredited", body: "Accredited supplier to Department of Health partner institutions." },
  { icon: Award, title: "BIR Registered", body: "Fully compliant tax registration as an enterprise distributor." },
];

export function Certifications() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Compliance & Trust"
        title="Certified, accredited, accountable"
        description="Every supply we distribute is backed by documentation and regulatory compliance."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CERTS.map((c) => (
          <FeatureCard key={c.title}>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-emerald/10 text-emerald">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}
