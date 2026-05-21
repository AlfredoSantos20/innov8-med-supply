import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layouts/site-layout";
import { Certifications } from "@/components/sections/certifications";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { NetworkSection } from "@/components/sections/network-section";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [resetKey, setResetKey] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const top = typeof window !== "undefined" ? window.scrollY <= 2 : true;
      setAtTop((prev) => (prev !== top ? top : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true } as any);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (atTop) setResetKey((k) => k + 1);
  }, [atTop]);

  return (
    <SiteLayout>
      <Hero key={`hero-${resetKey}`} />
      <PartnersStrip key={`partners-${resetKey}`} />
      <ProductShowcase key={`products-${resetKey}`} limit={4} />
      <WhyChooseUs key={`why-${resetKey}`} />
      <NetworkSection key={`network-${resetKey}`} />
      <Certifications key={`certs-${resetKey}`} />
      <CtaBanner key={`cta-${resetKey}`} />
    </SiteLayout>
  );
}
