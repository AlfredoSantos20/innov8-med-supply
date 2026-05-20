import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandButton } from "@/components/ui/brand-button";
import { Section } from "@/components/ui/section";

export function CtaBanner() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-button p-10 text-white shadow-glow md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold md:text-4xl">
              Need a reliable medical supply partner?
            </h3>
            <p className="mt-3 max-w-lg text-white/85">
              Get a custom quote within 24 hours — bulk pricing, scheduled delivery,
              and dedicated account support for your institution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact">
              <BrandButton size="lg" className="bg-white text-primary hover:bg-white/90">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </BrandButton>
            </Link>
            <Link to="/products">
              <BrandButton
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Browse Catalog
              </BrandButton>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
