import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2.5 font-display font-bold", className)}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-button text-white shadow-glow">
        <span className="text-sm tracking-tight">i8</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald shadow-glow" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-base", light ? "text-white" : "text-primary")}>
          INNOV<span className="text-emerald">8</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.18em]",
            light ? "text-white/60" : "text-muted-foreground",
          )}
        >
          International
        </span>
      </span>
    </Link>
  );
}
