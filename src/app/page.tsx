import Hero from "@/components/Hero";
import MainLayout from "@/components/MainLayout";
import Resume from "@/components/Resume";
import ThemeToggle from "@/components/ThemeToggle";

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
