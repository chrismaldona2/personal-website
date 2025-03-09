import { useTranslations } from "next-intl";
import ProjectItem from "./project-item";
import TitledSection from "@/components/shared/titled-section";

import MayaLightModeScreenshot from "@/../public/screenshots/maya-ui/light.webp";

const Projects = () => {
  const t = useTranslations("home.projects");
  return (
    <TitledSection title={t("title")}>
      <ul className="flex flex-col gap-6">
        <li>
          <ProjectItem
            name="Maya UI"
            link="https://maya-ui-psi.vercel.app/"
            screenshot={{ src: MayaLightModeScreenshot }}
          />
        </li>
      </ul>
    </TitledSection>
  );
};

export default Projects;
