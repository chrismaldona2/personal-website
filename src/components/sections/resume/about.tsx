import { LocationIcon } from "@/components/ui/icons";

import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("home.about");

  return (
    <section>
      <div className="flex gap-2 items-center mb-3">
        <LocationIcon className="size-4 text-neutral-400" />
        <span className="text-neutral-700 dark:text-neutral-400 text-base cursor-default">
          {t("location")}
        </span>
      </div>
      <p className="text-lg md:text-xl dark:text-neutral-300 text-[#929292]">
        {t("description")}
      </p>
    </section>
  );
};

export default About;
