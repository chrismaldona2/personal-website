import About from "./about";
import Education from "./education";
import Projects from "./projects";
import TechStack from "./tech-stack";

const Resume = () => {
  return (
    <div className=" py-8 lg:w-[52%] lg:py-24 flex flex-col gap-16">
      <About />
      <Projects />
      <Education />
      <TechStack />
    </div>
  );
};

export default Resume;
