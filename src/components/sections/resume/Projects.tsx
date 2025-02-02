import ProjectItem from "./ProjectItem";
import TitledSection from "@/components/shared/TitledSection";

const Projects = () => {
  return (
    <TitledSection title="Projects">
      <ul className="flex flex-col gap-6">
        <ProjectItem />
      </ul>
    </TitledSection>
  );
};

export default Projects;
