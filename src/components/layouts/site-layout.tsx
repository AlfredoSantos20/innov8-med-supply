import type { ReactNode } from "react";
import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {pathname === "/" ? (
          children
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
      <Footer />
    </div>
  );
}
