import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectItemProps {
  name: string;
  screenshot: {
    defaultImage: StaticImageData;
    lightModeImage?: StaticImageData;
    darkModeImage?: StaticImageData;
  };
  link: string;
}

const ProjectItem = ({ name, screenshot, link }: ProjectItemProps) => {
  const { defaultImage, lightModeImage, darkModeImage } = screenshot;

  return (
    <div
      className="flex flex-col gap-4 bg-gradient-to-b from-[#e7e7ea] to-[#efeff1] dark:from-[#181818] dark:to-[#141414] rounded-xl p-[1rem_0.825rem]
shadow-sm shadow-black/30 dark:shadow-neutral-200/10"
    >
      <div className="relative aspect-[16/8] bg-neutral-300 dark:bg-[#1b1b1b] rounded-lg overflow-hidden z-10 shadow-sm">
        {darkModeImage && lightModeImage ? (
          <>
            <Image
              src={darkModeImage.src}
              alt={`${name} dark mode screenshot`}
              className="w-full h-full object-cover object-top hidden dark:block"
              placeholder={darkModeImage.blurDataURL ? "blur" : undefined}
              blurDataURL={darkModeImage.blurDataURL}
              width={darkModeImage.width}
              height={darkModeImage.height}
              priority
            />
            <Image
              src={lightModeImage.src}
              alt={`${name} light mode screenshot`}
              className="w-full h-full object-cover object-top block dark:hidden"
              placeholder={lightModeImage.blurDataURL ? "blur" : undefined}
              blurDataURL={lightModeImage.blurDataURL}
              width={lightModeImage.width}
              height={lightModeImage.height}
              priority
            />
          </>
        ) : (
          <Image
            src={defaultImage?.src}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover object-top block dark:hidden"
            placeholder={defaultImage.blurDataURL ? "blur" : undefined}
            blurDataURL={defaultImage.blurDataURL}
            width={defaultImage.width}
            height={defaultImage.height}
          />
        )}
      </div>
      <a
        href={link}
        target="_blank"
        className="p-3 text-center font-semibold 
          bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#212122] dark:to-[#191919]
          text-zinc-400 dark:text-[#b4b4b7] rounded-lg shadow-md"
      >
        Visit
      </a>
    </div>
  );
};

export default ProjectItem;
