import { useTranslations } from "next-intl";
import { Sparkles, TrendingUp, ArrowDownRight } from "lucide-react";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function Hero() {
  const t = useTranslations("hero");

  const categories = [
    { key: "food", pct: 42, amount: "$412" },
    { key: "transport", pct: 24, amount: "$236" },
    { key: "subscriptions", pct: 12, amount: "$118" },
  ] as const;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora animate-float-slow left-[-10%] top-[-10%] h-[420px] w-[420px] bg-brand/40" />
        <div className="aurora right-[-8%] top-[6%] h-[360px] w-[360px] bg-accent/40" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand-strong dark:text-brand">
            <Sparkles size={15} />
            {t("badge")}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleAccent")}</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>

          <div className="mt-8">
            <WaitlistForm
              placeholder={t("emailPlaceholder")}
              cta={t("cta")}
              className="max-w-md"
            />
            <p className="mt-3 text-sm text-muted-foreground">{t("note")}</p>
          </div>
        </div>

        {/* Product mock */}
        <div className="relative">
          <div className="glass rounded-[calc(var(--radius-card)+0.5rem)] p-3 shadow-[var(--shadow-glow)]">
            <div className="rounded-[var(--radius-card)] border border-card-border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t("cardBalance")}</p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">
                    $12,480<span className="text-muted-foreground">.50</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand-strong dark:text-brand">
                  <TrendingUp size={13} />
                  {t("cardOnTrack")}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t("cardSpending")}</span>
                  <span className="font-medium">$766 / $1,200</span>
                </div>
                {categories.map((c) => (
                  <div key={c.key}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground">
                        {t(`cardCategories.${c.key}`)}
                      </span>
                      <span className="text-muted-foreground">{c.amount}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-brand/20 bg-brand/5 p-3">
                <ArrowDownRight size={16} className="mt-0.5 shrink-0 text-brand" />
                <p className="text-sm text-foreground">{t("cardInsight")}</p>
              </div>
            </div>
          </div>

          {/* Floating AI budget chip */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-card-border bg-card p-3 shadow-[var(--shadow-soft)] sm:block">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent text-brand-foreground">
                <Sparkles size={16} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{t("cardBudget")}</p>
                <p className="text-sm font-semibold">+18% saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
