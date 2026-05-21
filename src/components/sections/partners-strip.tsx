import { Section } from "@/components/ui/section";
import LogoLoop from "@/components/common/LogoLoop";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const PARTNERS = [
  "Philippine General Hospital",
  "East Avenue Medical Center",
  "Lung Center of the Philippines",
  "National Kidney and Transplant Institute",
  "Philippine Heart Center",
  "Jose R. Reyes Memorial Medical Center",
  "Dr. Jose N. Rodriguez Memorial Hospital",
  "Quirino Memorial Medical Center",
  "St. Luke's Medical Center",
  "St. Luke's Medical Center Global City",
  "Makati Medical Center",
  "The Medical City",
  "Asian Hospital and Medical Center",
  "Cardinal Santos Medical Center",
  "Manila Doctors Hospital",
  "Chinese General Hospital and Medical Center",
  "Fe Del Mundo Medical Center — pediatrics",
  "Veterans Memorial Medical Center",
  "San Lazaro Hospital — infectious diseases",
  "Philippine Children's Medical Center",
  "Chong Hua Hospital",
  "Cebu Doctors' University Hospital",
  "Southern Philippines Medical Center",
  "West Visayas State University Medical Center",
  "Baguio General Hospital and Medical Center",
];

export function PartnersStrip() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true } as any);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Section className="py-14 md:py-16">
      <p className="mb-8 text-center text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
        Trusted by leading healthcare institutions
      </p>
      <div className="relative mx-auto max-w-7xl">
        <div style={{ height: 72, position: 'relative', overflow: 'hidden' }} className="mb-6">
          <LogoLoop
            logos={PARTNERS.map((name) => ({ node: <span className="text-sm sm:text-base font-semibold text-muted-foreground">{name}</span>, title: name }))}
            speed={110}
            direction="left"
            logoHeight={18}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Partner institutions"
          />
        </div>
        <div style={{ height: 72, position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={PARTNERS.map((name) => ({ node: <span className="text-sm sm:text-base font-semibold text-muted-foreground">{name}</span>, title: name }))}
            speed={110}
            direction="right"
            logoHeight={18}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Partner institutions duplicate"
          />
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 left-auto z-50 inline-flex items-center gap-2 rounded-full bg-emerald px-4 py-3 text-white shadow-glow"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </Section>
  );
}
