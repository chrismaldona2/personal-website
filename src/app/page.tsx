import Hero from "@/components/sections/hero/Hero";
import MainLayout from "@/components/layout/MainLayout";
import Resume from "@/components/sections/resume/Resume";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-10 py-12 lg:py-0 overflow-clip">
      <MainLayout>
        <Hero />
        <Resume />
      </MainLayout>
      <div className="absolute top-0 right-0 my-10 mx-8 lg:mx-16">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Home;
