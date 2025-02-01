import { ReactNode } from "react";

const ResumeSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <h2 className="text-base font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-3.5">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default ResumeSection;
