import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layouts/site-layout";
import { CtaBanner } from "@/components/sections/cta-banner";
import { StatCard } from "@/components/ui/brand-cards";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY, STATS } from "@/constants/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Innov8 International Distribution" },
      { name: "description", content: "Since 2010, Innov8 International has been a trusted nationwide medical supply distributor in the Philippines." },
      { property: "og:title", content: "About Innov8 International" },
      { property: "og:description", content: "Our story, mission and nationwide healthcare partnership." },
    ],
    links: [
      { rel: "canonical", href: "/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-28">
        <Section className="py-16 md:py-20">
          <SectionHeader
            eyebrow="About us"
            title="Engineering healthcare logistics since 2010"
            description={`${COMPANY.name} is a Philippine-based B2B distributor of professional medical supplies and healthcare equipment — supporting hospitals, clinics, and institutions nationwide.`}
          />

          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground">Our mission</h3>
              <p className="mt-3 text-muted-foreground">
                To make essential medical supplies reliably accessible across every region
                of the Philippines — empowering healthcare providers with quality
                equipment, fair pricing, and dependable logistics.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground">Our vision</h3>
              <p className="mt-3 text-muted-foreground">
                To be the country&apos;s most trusted medical supply distribution partner —
                connecting global manufacturers with local healthcare needs through
                technology, scale, and integrity.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Section>

        <CtaBanner />
      </div>
    </SiteLayout>
  );
}
