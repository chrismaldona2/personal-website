import WavingHand from "@/components/WavingHand";

const MainInfo = () => {
  return (
    <div className="cursor-default text-xl ">
      <div className="flex gap-2 items-center">
        <WavingHand className="size-7 outline-none" />
        <span className="dark:text-neutral-50 text-neutral-700">
          Hi, I&apos;m
        </span>
      </div>
      <h1 className="text-6xl/snug sm:text-7xl/snug  font-bold -ml-1 dark:text-neutral-50 text-neutral-800">
        Christian
      </h1>
      <span className="dark:text-neutral-400 text-neutral-500">
        Full-stack Developer
      </span>
    </div>
  );
};

export default MainInfo;
