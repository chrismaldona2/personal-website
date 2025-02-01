import LocationIcon from "./Icons";

const ResumeHeader = () => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-3">
        <LocationIcon className="size-4 [&_path]:stroke-neutral-500" />
        <span className="text-neutral-700 dark:text-neutral-400 text-base">
          Santa Fe, Argentina
        </span>
      </div>
      <p className="text-lg md:text-xl dark:text-neutral-300 text-[#929292]">
        I’m a computer engineer student with a designer’s heart, obsessed with
        crafting pixel-perfect interfaces and breathing life into the web
        through motion.
      </p>
    </div>
  );
};

export default ResumeHeader;
