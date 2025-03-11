import { useTranslations } from "next-intl";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectItemProps {
  name: string;
  screenshot: {
    src: StaticImageData;
  };
  link: string;
}

const ProjectItem = ({ name, screenshot, link }: ProjectItemProps) => {
  const t = useTranslations("home.projects");

  return (
    <div
      className="flex flex-col gap-4 bg-linear-to-b from-[#eaeaec] to-[#efeff3] dark:from-[#181818] dark:to-[#141414] rounded-xl p-[1rem_0.825rem]
shadow-sm shadow-black/30 dark:shadow-neutral-200/10"
    >
      <div className="relative aspect-16/8 bg-neutral-300 dark:bg-[#1b1b1b] rounded-lg overflow-hidden z-10 shadow-xs">
        <Image
          src={screenshot.src}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover object-top"
          placeholder="blur"
          priority
          fill
        />
      </div>
      <a
        href={link}
        target="_blank"
        className="p-3 text-center font-semibold 
          bg-linear-to-b from-slate-50 to-slate-100 dark:from-[#212122] dark:to-[#191919]
          text-zinc-400 dark:text-[#b4b4b7] rounded-lg shadow-md"
      >
        {t("cta")}
      </a>
    </div>
  );
};

export default ProjectItem;
