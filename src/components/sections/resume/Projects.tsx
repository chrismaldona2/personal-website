import { useTranslations } from "next-intl";
import ProjectItem from "./ProjectItem";
import TitledSection from "@/components/shared/TitledSection";

const Projects = () => {
  const t = useTranslations("home.projects");
  return (
    <TitledSection title={t("title")}>
      <ul className="flex flex-col gap-6">
        <li>
          <ProjectItem />
        </li>
      </ul>
    </TitledSection>
  );
};

export default Projects;
