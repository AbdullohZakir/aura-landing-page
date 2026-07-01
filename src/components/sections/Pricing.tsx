import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const PLANS = [
  { key: "free", featured: false },
  { key: "pro", featured: true },
  { key: "family", featured: false },
] as const;

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map(({ key, featured }, i) => {
            const features = t.raw(`plans.${key}.features`) as string[];
            return (
              <Reveal
                key={key}
                delay={i * 90}
                className={`relative flex flex-col rounded-[var(--radius-card)] border p-7 ${
                  featured
                    ? "border-brand/40 bg-card shadow-[var(--shadow-glow)] lg:-mt-4 lg:mb-4"
                    : "border-card-border bg-card"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-accent px-3 py-1 text-xs font-semibold text-brand-foreground">
                    {t("mostPopular")}
                  </span>
                )}

                <h3 className="text-lg font-semibold">{t(`plans.${key}.name`)}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {t(`plans.${key}.price`)}
                  </span>
                  <span className="mb-1 text-muted-foreground">{t("perMonth")}</span>
                </div>
                <p className="mt-3 min-h-12 text-sm text-muted-foreground">
                  {t(`plans.${key}.desc`)}
                </p>

                <a
                  href="#cta"
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    featured
                      ? "bg-gradient-to-r from-brand to-accent text-brand-foreground shadow-[var(--shadow-glow)] hover:brightness-105"
                      : "border border-border bg-surface text-foreground hover:bg-muted"
                  }`}
                >
                  {t(`plans.${key}.cta`)}
                </a>

                <ul className="mt-7 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-brand"
                        strokeWidth={2.5}
                      />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
