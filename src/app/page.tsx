import WavingHand from "@/components/animations/WavingHand/WavingHand";

const Home = () => {
  return (
    <main className="min-h-screen text-white grid grid-cols-2 gap-8 items-start w-[80%] m-auto py-32">
      <div className="text-2xl cursor-default flex flex-col gap-1 items-start ">
        <span className="flex gap-2 items-center">
          <WavingHand />
          Hi I&apos;m
        </span>
        <h1 className="text-7xl/[100%] font-bold text-white">Christian</h1>
        <span className="text-neutral-300 ml-1">Full-stack Developer</span>
      </div>
      <div>
        <p className="text-xl">
          I’m a computer engineer student with a designer’s heart, obsessed with
          crafting pixel-perfect interfaces and breathing life into the web
          through motion.
        </p>
      </div>
    </main>
  );
};

export default Home;
