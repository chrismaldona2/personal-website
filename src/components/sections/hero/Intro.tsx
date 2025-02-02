import WavingHand from "@/components/ui/WavingHand";

const Intro = () => {
  return (
    <section className="cursor-default text-xl ">
      <div className="flex gap-2 items-center">
        <WavingHand size="7" />
        <span className="dark:text-neutral-50 text-neutral-600">
          Hi, I&apos;m
        </span>
      </div>
      <h1 className="flex flex-col">
        <span className="text-6xl/snug sm:text-7xl/snug  font-bold -ml-1 dark:text-neutral-50 text-neutral-700">
          Christian
        </span>
        <span className="text-xl dark:text-neutral-400 text-neutral-500">
          Full-stack Developer
        </span>
      </h1>
    </section>
  );
};

export default Intro;
