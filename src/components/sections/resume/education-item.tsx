import { EducationItem as EducationItemProps } from "@/data/education";
import { useTranslations } from "next-intl";

const EducationItem = ({
  institution,
  carrer,
  interval,
}: EducationItemProps) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col">
      <div className="grid sm:grid-cols-[1fr_auto] gap-x-5 items-baseline text-[0.95rem]">
        <h3 className="text-base font-medium text-[#5a5a5a] dark:text-[#bdbdbd]">
          {t(carrer)}
        </h3>

        <span className="text-neutral-400 cursor-default">{t(interval)}</span>
      </div>
      <a
        className="text-[.95rem] text-neutral-400 dark:text-[rgb(131,_131,_131)] w-fit"
        href={institution.link}
        target="_blank"
      >
        {t(institution.name)}
      </a>
    </div>
  );
};

export default EducationItem;
