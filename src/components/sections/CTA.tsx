import { useTranslations } from "next-intl";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="cta" className="px-4 py-20 sm:px-6 sm:py-24">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[calc(var(--radius-card)+0.75rem)] bg-gradient-to-br from-brand-strong via-brand to-accent px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* decorative glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.35), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-white/85">{t("subtitle")}</p>

          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm
              placeholder={t("emailPlaceholder")}
              cta={t("button")}
              variant="onAccent"
            />
            <p className="mt-3 text-sm text-white/75">{t("note")}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
