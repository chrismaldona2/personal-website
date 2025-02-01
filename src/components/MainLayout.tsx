import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="lg:flex lg:justify-between lg:gap-4">{children}</main>
  );
};

export default MainLayout;
