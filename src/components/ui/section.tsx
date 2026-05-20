import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("container-px mx-auto max-w-7xl py-20 md:py-28", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold text-foreground md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container-px mx-auto max-w-7xl", className)} {...props} />;
}
