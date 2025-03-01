"use client";
import useTheme from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { HTMLAttributes, MouseEvent, useState } from "react";

const shadow = {
  dark: "drop-shadow-[0px_0px_1.35rem_rgba(143,_159,_201,_1)]",
  light: "drop-shadow-[0px_0px_.8rem_rgba(255,_200,_0,_1)]",
};

const RotatingThemeToggle = ({
  className,
  onClick,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  const { mounted, resolvedTheme, handleSwitch } = useTheme();
  const [isExiting, setIsExiting] = useState(false);
  if (!mounted) return null;

  const ariaLabel =
    props["aria-label"] ??
    (resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!isExiting) {
      setIsExiting(true);
      onClick?.(event);
    }
  };

  const handleAnimationEnd = () => {
    if (isExiting) {
      handleSwitch();
      setIsExiting(false);
    }
  };

  return (
    <button
      {...props}
      className={cn(
        "size-6 appearance-none cursor-pointer rounded-sm overflow-clip",
        resolvedTheme === "dark" ? shadow.dark : shadow.light,
        isExiting ? "animate-rotate-out" : "animate-rotate-in",
        className
      )}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      aria-label={ariaLabel}
      role={props.role ?? "switch"}
      aria-checked={resolvedTheme === "light"}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="size-full" />
      ) : (
        <SunIcon className="size-full" />
      )}
    </button>
  );
};

export default RotatingThemeToggle;

const SunIcon = (props: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("pointer-events-none", props.className)}
    >
      <rect width="24" height="24" fill="#ffff8d" />
      <path d="M3 3H21V21H3V3Z" fill="white" />
    </svg>
  );
};

const MoonIcon = (props: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("pointer-events-none", props.className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H6V6H3V3ZM3 12H6V15H3V12Z"
        fill="#59667a"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0H12V3H9V0ZM21 12H24V15H21V12ZM21 3H18V9H21V3ZM12 9H15V15H12V9Z"
        fill="#949aaf"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3H15V9V12H21V9H18V3ZM9 12V6H12V12V15H21V18H9V15H6V12H9Z"
        fill="#b8c0e2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0H9V3H12V0H21H24V12H21V3H15V6V9H12V6H9V12H6V0ZM21 15V12H15V15H21ZM21 15V18H24V15H21ZM6 15H9V18H6V15Z"
        fill="#edf4ff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6H6V9H3V6ZM3 15H6V18H3V15ZM6 18H9V21H6V18ZM21 18H24V21H21V18Z"
        fill="#747c9e"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0H0V9H3V0ZM3 12H0V24H3H12V21H15V24H24V21H18V18H9V21H3V12Z"
        fill="#59637d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0H3V3H6V0ZM6 18H3V21H6V18ZM18 18H21V21H18V18ZM15 21H12V24H15V21ZM0 9H6V12H0V9Z"
        fill="#454b62"
      />
    </svg>
  );
};
