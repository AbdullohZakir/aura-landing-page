import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const KEYS = ["when", "safe", "cost", "banks", "leave"] as const;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {KEYS.map((key, i) => (
            <Reveal key={key} delay={i * 60}>
              <details className="group rounded-2xl border border-card-border bg-card px-5 open:shadow-[var(--shadow-soft)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium marker:content-none">
                  {t(`items.${key}.q`)}
                  <Plus
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="pb-5 text-muted-foreground">{t(`items.${key}.a`)}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
