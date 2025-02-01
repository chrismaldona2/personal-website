import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";
import EducationList from "./EducationList";

const Resume = () => {
  return (
    <div className="py-8 lg:w-[52%] lg:py-24 flex flex-col gap-16">
      <ResumeHeader />
      <ResumeSection title="Projects">
        <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg cursor-pointer mt-5"></div>
      </ResumeSection>
      <ResumeSection title="Education">
        <EducationList />
      </ResumeSection>
      <ResumeSection title="Tech Stack">
        <span className="text-base font-medium  text-[#929292] dark:text-[#bebebe]">
          Javascript, TypeScript, React, Next.js, Tailwind CSS, C#, .Net Core,
          Microsoft SQL Server.
        </span>
      </ResumeSection>
    </div>
  );
};

export default Resume;
