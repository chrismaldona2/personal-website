import { education } from "@/data/education";
import EducationItem from "./EducationItem";

const EducationList = () => {
  return (
    <div className="flex flex-col gap-6">
      {education.map((data) => {
        return <EducationItem {...data} key={data.id} />;
      })}
    </div>
  );
};

export default EducationList;
