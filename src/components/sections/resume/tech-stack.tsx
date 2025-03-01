import TitledSection from "@/components/shared/titled-section";
import { useTranslations } from "next-intl";

const TechStack = () => {
  const t = useTranslations("home.techStack");
  return (
    <TitledSection title={t("title")}>
      <p className="text-base font-medium  text-neutral-400 dark:text-neutral-300">
        {t("stack")}
      </p>
    </TitledSection>
  );
};

export default TechStack;
