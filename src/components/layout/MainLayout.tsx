import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="lg:flex lg:justify-between lg:gap-4">{children}</main>
  );
};

export default MainLayout;
