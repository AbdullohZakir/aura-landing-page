import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const KEYS = ["one", "two", "three"] as const;

const AVATAR_GRADIENTS = [
  "from-brand to-accent",
  "from-accent to-brand",
  "from-brand-strong to-accent",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {KEYS.map((key, i) => {
            const name = t(`items.${key}.name`);
            return (
              <Reveal
                key={key}
                delay={i * 100}
                className="flex flex-col rounded-[var(--radius-card)] border border-card-border bg-card p-6"
              >
                <Quote className="text-brand/40" size={28} />
                <div className="mt-3 flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-foreground">
                  “{t(`items.${key}.quote`)}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i]} text-sm font-semibold text-brand-foreground`}
                  >
                    {initials(name)}
                  </span>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t(`items.${key}.role`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
