import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layouts/site-layout";
import { Certifications } from "@/components/sections/certifications";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { NetworkSection } from "@/components/sections/network-section";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <PartnersStrip />
      <ProductShowcase limit={4} />
      <WhyChooseUs />
      <NetworkSection />
      <Certifications />
      <CtaBanner />
    </SiteLayout>
  );
}
