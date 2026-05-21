import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}

export function FeatureCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}

export function StatCard({
  value,
  label,
  className,
}: {
  value: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/80 p-6 text-center shadow-soft",
        className,
      )}
    >
      <div className="text-gradient-brand text-3xl font-bold md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
