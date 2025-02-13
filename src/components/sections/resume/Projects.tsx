import { useTranslations } from "next-intl";
import ProjectItem from "./project-item";
import TitledSection from "@/components/shared/titled-section";

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
