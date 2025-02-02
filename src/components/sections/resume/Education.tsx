import { educationList } from "@/data/education";
import EducationItem from "./EducationItem";
import TitledSection from "@/components/shared/TitledSection";

const Education = () => {
  return (
    <TitledSection title="Education">
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
