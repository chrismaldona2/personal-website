import { EducationItem as Props } from "@/data/education";

const EducationItem = ({ institution, carrer, interval }: Props) => {
  return (
    <div className="flex flex-col ">
      <div className="grid sm:grid-cols-[1fr_auto] gap-x-5 items-baseline text-[0.95rem]">
        <h3 className="text-base font-medium text-neutral-600 dark:text-[#bdbdbd]">
          {carrer}
        </h3>

        <span className=" text-neutral-400">{interval}</span>
      </div>
      <a
        className="text-[.95rem] text-neutral-400 dark:text-neutral-500 w-fit"
        href={institution.link}
        target="_blank"
      >
        {institution.name}
      </a>
    </div>
  );
};

export default EducationItem;
