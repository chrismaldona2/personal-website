import { ReactNode } from "react";

const TitledSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section>
      <h2 className="text-base font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-3.5 cursor-default">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default TitledSection;
