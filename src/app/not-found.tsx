import Button from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("notFound");
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-5xl text-neutral-800 dark:text-neutral-300 font-bold">
          404
        </h1>
        <span className="text-base text-neutral-700 dark:text-neutral-400">
          {t("description")}
        </span>
        <Link href="/" aria-label={t("returnToHome")} className="mt-2">
          <Button>{t("returnToHome")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
