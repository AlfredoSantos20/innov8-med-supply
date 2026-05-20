import { Section } from "@/components/ui/section";

const PARTNERS = [
  "St. Luke's Medical",
  "Makati Med",
  "The Medical City",
  "Philippine General",
  "Asian Hospital",
  "Cardinal Santos",
  "Cebu Doctors'",
  "Davao Doctors",
];

export function PartnersStrip() {
  return (
    <Section className="py-14 md:py-16">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by leading healthcare institutions
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {PARTNERS.map((p) => (
          <div
            key={p}
            className="grid h-16 place-items-center rounded-xl border border-border bg-card/60 px-4 text-center text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            {p}
          </div>
        ))}
      </div>
    </Section>
  );
}
