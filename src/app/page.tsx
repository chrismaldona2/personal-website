import Hero from "@/components/Hero";
import MainLayout from "@/components/MainLayout";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className="h-screen pt-32 pb-12 bg-neutral-100 dark:bg-neutral-900">
      <MainLayout>
        <Hero />
        <div>
          <p className="text-lg sm:text-xl dark:text-neutral-50 text-neutral-800">
            I’m a computer engineer student with a designer’s heart, obsessed
            with crafting pixel-perfect interfaces and breathing life into the
            web through motion.
          </p>
        </div>
      </MainLayout>
      <div className="fixed top-0 right-0 m-8 shadow-[0px_0px_2rem_#ffcb90] dark:shadow-[0px_0px_2rem_#747992]">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Home;
