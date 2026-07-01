import { useTranslations } from "next-intl";
import {
  Zap,
  Brain,
  Lightbulb,
  Target,
  ShieldCheck,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS: { key: string; Icon: LucideIcon }[] = [
  { key: "autoTrack", Icon: Zap },
  { key: "aiBudget", Icon: Brain },
  { key: "insights", Icon: Lightbulb },
  { key: "goals", Icon: Target },
  { key: "security", Icon: ShieldCheck },
  { key: "forecast", Icon: LineChart },
];

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ key, Icon }, i) => (
            <Reveal
              key={key}
              delay={(i % 3) * 90}
              className="group rounded-[var(--radius-card)] border border-card-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand-strong transition-colors group-hover:bg-brand group-hover:text-brand-foreground dark:text-brand">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{t(`items.${key}.title`)}</h3>
              <p className="mt-2 text-muted-foreground">{t(`items.${key}.desc`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
