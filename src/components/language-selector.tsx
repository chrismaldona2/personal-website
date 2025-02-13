"use client";
import { useMemo, useTransition } from "react";
import Dropdown from "@/components/ui/dropdown";
import { useLocale, useTranslations } from "next-intl";
import { locales, Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

const LanguageSelector = () => {
  const t = useTranslations("shared.localeSwitcher");
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const languagesOptions = useMemo(() => {
    return locales
      .filter((language) => language !== locale)
      .map((language) => ({
        value: language,
        label: t("locale", { locale: language }),
      }));
  }, [t, locale]);

  const handleLanguageChange = (value: string) => {
    const nextLocale = value as Locale;

    startTransition(() => {
      setUserLocale(nextLocale);
    });
  };

  return (
    <Dropdown
      options={languagesOptions}
      defaultOption={{ value: locale, label: t("locale", { locale }) }}
      ariaLabel={t("ariaLabel")}
      tooltipLabel={t("ariaLabel")}
      onOptionChange={handleLanguageChange}
      isChangePending={isPending}
    />
  );
};

export default LanguageSelector;
