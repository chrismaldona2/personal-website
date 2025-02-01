import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const notFound = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-5xl text-neutral-800 dark:text-neutral-300 font-bold">
          404
        </h1>
        <span className="text-base text-neutral-700 dark:text-neutral-400">
          Not found
        </span>
        <Link
          href="/"
          className="py-3 px-5 rounded-lg bg-neutral-800 text-slate-100 dark:text-neutral-400 mt-4 hover:scale-[102%] transition-transform"
        >
          Return to main page
        </Link>
      </div>
      <div className="absolute top-0 right-0 my-10 mx-8 lg:mx-16">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default notFound;
