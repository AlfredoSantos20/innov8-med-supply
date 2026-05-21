import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/common/logo";
import { BrandButton } from "@/components/ui/brand-button";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { motion, LayoutGroup } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Smoothly scroll to top when navigating to the homepage
  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const showBg = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        showBg && "backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
        showBg ? (scrolled ? "border-b border-border/60 bg-background/70" : "bg-background/40") : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Logo className="origin-left scale-110 md:scale-125" />

        <LayoutGroup id="main-nav-desktop">
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  )}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={l.to === "/" ? () => window.scrollTo({ top: 0, behavior: "smooth" }) : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="hidden md:block">
          <Link to="/contact">
            <BrandButton variant="gradient" size="lg">Inquire Now</BrandButton>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          <LayoutGroup id="main-nav-mobile">
            {NAV_LINKS.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn("relative rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary")}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={l.to === "/" ? () => window.scrollTo({ top: 0, behavior: "smooth" }) : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-xl bg-secondary"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </LayoutGroup>
          <Link to="/contact" className="mt-2">
            <BrandButton variant="gradient" className="w-full">Inquire Now</BrandButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
