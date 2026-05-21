import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BrandButton } from "@/components/ui/brand-button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PRODUCTS } from "@/constants/site";

export function ProductShowcase({ limit }: { limit?: number }) {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
  return (
    <Section id="products">
      <SectionHeader
        eyebrow="Products"
        title="Medical products"
        description="From PPE and diagnostics to hospital furniture and respiratory care — sourced from trusted manufacturers, ready for nationwide delivery."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="aspect-square overflow-hidden bg-gradient-card">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="text-xs font-medium uppercase tracking-wider text-emerald">
                {p.category}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {limit && (
        <div className="mt-12 flex justify-center">
          <Link to="/products">
            <BrandButton variant="outline" size="lg">
              View full Products <ArrowUpRight className="h-4 w-4" />
            </BrandButton>
          </Link>
        </div>
      )}
    </Section>
  );
}
