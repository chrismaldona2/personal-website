import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full py-3 px-5 rounded-lg bg-neutral-500 dark:bg-neutral-800 text-slate-100 dark:text-neutral-400 mt-4 hover:scale-[102%] transition-transform"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
