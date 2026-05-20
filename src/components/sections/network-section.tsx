import { MapPin } from "lucide-react";
import mapImg from "@/assets/network-map.jpg";
import { Section, SectionHeader } from "@/components/ui/section";
import { REGIONS } from "@/constants/site";

export function NetworkSection() {
  return (
    <Section className="relative">
      <div className="rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-glow md:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Nationwide Distribution
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              From Luzon to Mindanao — <br />
              <span className="text-gradient-brand" style={{ backgroundImage: "linear-gradient(135deg,#5eead4,#34d399)" }}>
                one supply chain.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Our distribution hubs and partner couriers cover all 17 Philippine
              regions, ensuring medical supplies reach where they&apos;re needed —
              urban hospitals and remote clinics alike.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2 text-sm md:grid-cols-2">
              {REGIONS.map((r) => (
                <div key={r} className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-3.5 w-3.5 text-emerald" />
                  <span className="truncate">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={mapImg}
                alt="Distribution network across the Philippines"
                loading="lazy"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
