import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Truck,
  Clock3,
} from "lucide-react";

import { BrandButton } from "@/components/ui/brand-button";
import { Section } from "@/components/ui/section";

export function CtaBanner() {
  return (
    <Section className="relative">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#045D75] via-[#0A728A] to-[#0E8CA6] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] md:p-14">
        
        {/* Background Effects */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_35%)]"
        />

        <div
          aria-hidden
          className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />

        <div
          aria-hidden
          className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
        />

        {/* Floating Glass Card */}
        <div
          aria-hidden
          className="absolute right-10 top-10 hidden h-40 w-40 rotate-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl lg:block"
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
              <Building2 className="h-4 w-4" />
              Trusted by hospitals & healthcare institutions
            </div>

            {/* Title */}
            <h3 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Need a reliable
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                {" "}
                medical supply
              </span>{" "}
              partner?
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Get enterprise-grade procurement support with fast quotations,
              nationwide logistics, cold-chain delivery, and dedicated account
              management tailored for healthcare providers.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                {
                  icon: ShieldCheck,
                  text: "FDA Licensed",
                },
                {
                  icon: Truck,
                  text: "Nationwide Delivery",
                },
                {
                  icon: Clock3,
                  text: "24hr Quote Response",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur-md"
                >
                  <item.icon className="h-4 w-4 text-cyan-200" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
              
              <div className="mb-5">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/70">
                  Ready to partner?
                </p>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  Let’s support your healthcare operations.
                </h4>
              </div>

              <div className="space-y-3">
                <Link to="/contact" className="block">
                  <BrandButton
                    size="lg"
                    className="group w-full bg-white text-primary transition-all duration-300 hover:scale-[1.02] hover:bg-white"
                  >
                    Inquire Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </BrandButton>
                </Link>

                <Link to="/products" className="block">
                  <BrandButton
                    size="lg"
                    variant="outline"
                    className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
                    Browse Products
                  </BrandButton>
                </Link>
              </div>

              {/* Bottom Trust Text */}
              <div className="mt-6 border-t border-white/10 pt-5 text-sm text-white/70">
                Serving clinics, hospitals, laboratories, and healthcare
                distributors across the Philippines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}