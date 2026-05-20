import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/layouts/site-layout";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Section, SectionHeader } from "@/components/ui/section";
import { CATEGORIES, PRODUCTS } from "@/constants/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Medical Products & Equipment — Innov8 International" },
      { name: "description", content: "Browse our full catalog of professional medical supplies and healthcare equipment." },
      { property: "og:title", content: "Medical Products Catalog" },
      { property: "og:description", content: "PPE, diagnostics, hospital furniture, mobility and respiratory care equipment." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("All");

  const cats = useMemo(() => ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))], []);

  const filtered = PRODUCTS.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <SiteLayout>
      <div className="pt-28">
        <Section className="py-12 md:py-16">
          <SectionHeader
            eyebrow="Catalog"
            title="Professional medical supplies"
            description="Clinical-grade equipment and disposables — sourced, certified and delivered nationwide."
          />

          <div className="mx-auto mb-8 flex max-w-lg items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-soft">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products or categories…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                  active === c
                    ? "border-transparent bg-gradient-button text-white shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:border-teal/40 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium uppercase tracking-wider text-emerald">
                    {p.category}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              All categories we distribute
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <CtaBanner />
      </div>
    </SiteLayout>
  );
}
