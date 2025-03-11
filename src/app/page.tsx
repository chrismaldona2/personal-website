import Hero from "@/components/sections/hero/hero";
import MainLayout from "@/components/layout/main-layout";
import Resume from "@/components/sections/resume/resume";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 sm:px-10 py-12 lg:py-0 overflow-clip">
      <MainLayout>
        <Hero />
        <Resume />
      </MainLayout>
    </div>
  );
};

export default Home;
