import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/layouts/site-layout";
import { BrandButton } from "@/components/ui/brand-button";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY } from "@/constants/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Innov8 International Distribution" },
      { name: "description", content: "Send an inquiry or speak to our medical supply distribution team." },
      { property: "og:title", content: "Contact Innov8 International" },
      { property: "og:description", content: "Get a response to your inquiry within 24 hours from our team." },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <div className="pt-28">
        <Section className="py-12 md:py-16">
          <SectionHeader
            eyebrow="Get in touch"
            title="Let's build your supply plan"
            description="Tell us what your institution needs — we'll respond to your inquiry within 24 hours."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground">Contact information</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our distribution specialists are ready to support your facility.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald/10 text-emerald">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Head Office</div>
                    <div className="text-muted-foreground">{COMPANY.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-teal/10 text-teal">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">{COMPANY.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">{COMPANY.email}</div>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-3"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Organization" name="org" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
                  placeholder="Tell us about the products and quantities you need…"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                {sent ? (
                  <span className="text-sm text-emerald">
                    ✓ Thanks — our team will reach out shortly.
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    We typically respond within one business day.
                  </span>
                )}
                <BrandButton variant="gradient" size="lg" type="submit">
                  Send message <Send className="h-4 w-4" />
                </BrandButton>
              </div>
            </form>
          </div>
        </Section>
      </div>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={name === "phone" ? "tel" : type}
        inputMode={name === "phone" ? "tel" : undefined}
        pattern={name === "phone" ? "^\\+63\\d{9,10}$" : undefined}
        onInvalid={name === "phone" ? (e) => { e.currentTarget.setCustomValidity("Enter a Philippine phone number in +63 format (e.g., +639XXXXXXXXX)"); } : undefined}
        onInput={name === "phone" ? (e) => { e.currentTarget.setCustomValidity(""); } : undefined}
        onKeyDown={
          name === "phone"
            ? (e) => {
                const k = e.key;
                if (
                  k === "Backspace" ||
                  k === "Delete" ||
                  k === "ArrowLeft" ||
                  k === "ArrowRight" ||
                  k === "Tab" ||
                  k === "Home" ||
                  k === "End"
                ) {
                  return;
                }
                if (k === "+") {
                  const input = e.currentTarget;
                  const atStart = input.selectionStart === 0;
                  const hasPlus = input.value.includes("+");
                  if (atStart && !hasPlus) return;
                  e.preventDefault();
                  return;
                }
                if (/\d/.test(k)) return;
                e.preventDefault();
              }
            : undefined
        }
        onPaste={
          name === "phone"
            ? (e) => {
                const text = e.clipboardData.getData("text");
                if (!/^\+?\d+$/.test(text)) e.preventDefault();
              }
            : undefined
        }
        title={name === "phone" ? "Enter a Philippine phone number in +63 format (e.g., +639XXXXXXXXX)" : undefined}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
      />
    </div>
  );
}
