import { useTranslations } from "next-intl";
import { Link2, Sparkles, LineChart, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const STEPS: { key: string; Icon: LucideIcon }[] = [
  { key: "connect", Icon: Link2 },
  { key: "learn", Icon: Sparkles },
  { key: "grow", Icon: LineChart },
];

export function HowItWorks() {
  const t = useTranslations("how");

  return (
    <section id="how" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {STEPS.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 120} className="relative text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-card-border bg-card shadow-[var(--shadow-soft)]">
                <Icon size={22} className="text-brand" />
              </div>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-strong dark:text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-semibold">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground">
                {t(`steps.${key}.desc`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
