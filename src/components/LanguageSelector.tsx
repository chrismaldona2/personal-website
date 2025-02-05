"use client";
import { useMemo, useTransition } from "react";
import Dropdown from "@/components/ui/Dropdown";
import { useLocale, useTranslations } from "next-intl";
import { routing, Locale, useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";

function LanguageSelector() {
  const t = useTranslations("shared.localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [isPending, startTransition] = useTransition();

  const languagesOptions = useMemo(() => {
    return routing.locales
      .filter((language) => language !== locale)
      .map((language) => ({
        value: language,
        label: t("locale", { locale: language }),
      }));
  }, [t, locale]);

  const handleLanguageChange = (value: string) => {
    const nextLocale = value as Locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
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
}

export default LanguageSelector;
