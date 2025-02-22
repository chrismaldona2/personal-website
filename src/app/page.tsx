import Hero from "@/components/sections/hero/hero";
import MainLayout from "@/components/layout/main-layout";
import Resume from "@/components/sections/resume/resume";
import ThemeToggle from "@/components/ui/theme-toggle";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-10 py-12 lg:py-0 overflow-clip">
      <MainLayout>
        <Hero />
        <Resume />
      </MainLayout>
      <ThemeToggle className="absolute top-0 right-0 my-10 mx-8 lg:mx-16" />
    </div>
  );
};

export default Home;
