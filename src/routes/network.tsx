import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layouts/site-layout";
import { CtaBanner } from "@/components/sections/cta-banner";
import { NetworkSection } from "@/components/sections/network-section";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Distribution Network — Innov8 International" },
      { name: "description", content: "Nationwide medical supply distribution across all 17 Philippine regions." },
      { property: "og:title", content: "Nationwide Distribution Network" },
      { property: "og:description", content: "From Luzon to Mindanao — one reliable medical supply chain." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-20">
        <NetworkSection />
        <CtaBanner />
      </div>
    </SiteLayout>
  ),
});
