import { LocationIcon } from "@/components/ui/Icons";

const About = () => {
  return (
    <section>
      <div className="flex gap-2 items-center mb-3">
        <LocationIcon className="size-4 [&_path]:stroke-neutral-500" />
        <span className="text-neutral-700 dark:text-neutral-400 text-base cursor-default">
          Santa Fe, Argentina
        </span>
      </div>
      <p className="text-lg md:text-xl dark:text-neutral-300 text-[#929292]">
        I’m a computer engineering student with a keen eye for design, committed
        to building scalable, intuitive interfaces while breathing life into the
        web through motion.
      </p>
    </section>
  );
};

export default About;
