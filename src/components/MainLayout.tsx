import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full max-w-[1300px] w-[80%] mx-auto grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-8">
      {children}
    </main>
  );
};

export default MainLayout;
