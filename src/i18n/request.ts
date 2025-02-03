import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

type SupportedLocale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;

  let locale: SupportedLocale = routing.defaultLocale;
  if (
    resolvedLocale &&
    routing.locales.includes(resolvedLocale as SupportedLocale)
  ) {
    locale = resolvedLocale as SupportedLocale;
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
