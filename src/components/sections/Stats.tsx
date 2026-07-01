import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  const t = useTranslations("stats");

  const items = [
    { value: "12k+", key: "waitlist" },
    { value: "34%", key: "saved" },
    { value: "4.9★", key: "rating" },
    { value: "2 min", key: "setup" },
  ] as const;

  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.key}
            delay={i * 80}
            className="text-center"
          >
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="gradient-text">{item.value}</span>
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">{t(item.key)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
