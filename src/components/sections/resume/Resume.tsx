import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import TechStack from "./TechStack";

const Resume = () => {
  return (
    <div className="py-8 lg:w-[52%] lg:py-24 flex flex-col gap-16">
      <About />
      <Projects />
      <Education />
      <TechStack />
    </div>
  );
};

export default Resume;
