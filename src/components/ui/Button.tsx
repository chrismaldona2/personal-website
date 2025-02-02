import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="py-3 px-5 rounded-lg bg-neutral-800 text-slate-100 dark:text-neutral-400 mt-4 hover:scale-[102%] transition-transform"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
