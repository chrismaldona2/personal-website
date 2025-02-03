import TitledSection from "@/components/shared/TitledSection";
import { useTranslations } from "next-intl";

const TechStack = () => {
  const t = useTranslations("home.techStack");
  return (
    <TitledSection title={t("title")}>
      <span className="text-base font-medium  text-[#929292] dark:text-[#bebebe]">
        Javascript, TypeScript, React, Next.js, Tailwind CSS, C#, .NET Core,
        Microsoft SQL Server.
      </span>
    </TitledSection>
  );
};

export default TechStack;
