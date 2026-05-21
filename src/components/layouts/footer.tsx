import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { COMPANY, NAV_LINKS } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 0%, color-mix(in oklab, oklch(0.66 0.17 158) 35%, transparent), transparent), radial-gradient(50% 50% at 10% 100%, color-mix(in oklab, oklch(0.72 0.13 200) 35%, transparent), transparent)",
        }}
      />
      <div className="container-px relative mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light className="origin-left scale-110 md:scale-125" />
            <p className="mt-5 max-w-md text-sm text-white/70">
              {COMPANY.name} — your trusted nationwide partner for professional medical
              supplies and healthcare equipment since {COMPANY.established}.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald" /> {COMPANY.address}</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald" /> {COMPANY.phone}</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald" /> {COMPANY.email}</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Navigate</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-emerald"
                    onClick={l.to === "/" ? () => window.scrollTo({ top: 0, behavior: "smooth" }) : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Certifications</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>FDA Philippines Licensed</li>
              <li>ISO 9001:2015 Certified</li>
              <li>DOH Accredited Supplier</li>
              <li>BIR Registered Distributor</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span>Built for healthcare. Trusted nationwide.</span>
        </div>
      </div>
    </footer>
  );
}
