"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type WaitlistFormProps = {
  placeholder: string;
  cta: string;
  /** "hero" is used on light-ish surfaces, "cta" on the accent band. */
  variant?: "default" | "onAccent";
  className?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  placeholder,
  cta,
  variant = "default",
  className = "",
}: WaitlistFormProps) {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Simulate a request. Wire this to your form backend / API route later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  const onAccent = variant === "onAccent";

  if (status === "done") {
    return (
      <div
        className={`flex items-center justify-center gap-3 rounded-2xl border px-5 py-4 ${
          onAccent
            ? "border-white/30 bg-white/15 text-white"
            : "border-brand/30 bg-brand/10 text-foreground"
        } ${className}`}
        role="status"
      >
        <CheckCircle2 className={onAccent ? "text-white" : "text-brand"} size={22} />
        <div className="text-left">
          <p className="font-semibold">{t("success")}</p>
          <p className={`text-sm ${onAccent ? "text-white/80" : "text-muted-foreground"}`}>
            {t("successNote")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={`w-full ${className}`}>
      <div
        className={`flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-2 sm:rounded-2xl sm:border sm:p-1.5 ${
          onAccent
            ? "sm:border-white/25 sm:bg-white/10"
            : "sm:border-border sm:bg-surface sm:shadow-[var(--shadow-soft)]"
        }`}
      >
        <label htmlFor={`wl-${variant}`} className="sr-only">
          {placeholder}
        </label>
        <input
          id={`wl-${variant}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-invalid={status === "error"}
          className={`w-full flex-1 rounded-2xl border bg-transparent px-4 py-3 text-base outline-none placeholder:text-muted-foreground sm:border-0 sm:py-2.5 ${
            onAccent
              ? "border-white/25 text-white placeholder:text-white/60"
              : "border-border text-foreground"
          } ${status === "error" ? "border-red-500" : ""}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold transition-all disabled:opacity-70 sm:py-2.5 ${
            onAccent
              ? "bg-white text-brand-strong hover:bg-white/90"
              : "bg-gradient-to-r from-brand to-accent text-brand-foreground shadow-[var(--shadow-glow)] hover:brightness-105"
          }`}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {t("loading")}
            </>
          ) : (
            <>
              {cta}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-2 text-sm ${onAccent ? "text-white" : "text-red-500"}`}
          role="alert"
        >
          {t("invalid")}
        </p>
      )}
    </form>
  );
}
