import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2.5 font-display font-bold", className)}
      onClick={() => {
        // Smoothly scroll to top when clicking the logo
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <motion.img
        src="/assets/images/innov8logo.png"
        alt="Innov8 International Distribution Inc."
        className="h-12 md:h-16 w-auto object-contain"
        initial={{ opacity: 0, y: 6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </Link>
  );
}
