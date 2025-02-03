import { educationList } from "@/data/education";
import EducationItem from "./EducationItem";
import TitledSection from "@/components/shared/TitledSection";
import { useTranslations } from "next-intl";

const Education = () => {
  const t = useTranslations("home.education");
  return (
    <TitledSection title={t("title")}>
      <ul className="flex flex-col gap-6">
        {educationList.map((data) => {
          return (
            <li key={data.id}>
              <EducationItem {...data} />
            </li>
          );
        })}
      </ul>
    </TitledSection>
  );
};

export default Education;
