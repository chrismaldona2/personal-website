"use client";
import { AnimatePresence, Variants, motion } from "motion/react";
import { useState, useCallback } from "react";
import { Arrow } from "./Icons";
import { cn } from "@/lib/utils";

export interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  defaultOption: Option;
  ariaLabel?: string;
  tooltipLabel?: string;
  onOptionChange?: (value: Option["value"]) => void;
  isChangePending?: boolean;
}

const Dropdown = ({
  options,
  defaultOption,
  ariaLabel = "Select an option",
  onOptionChange,
  isChangePending,
  tooltipLabel,
}: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleMenu = useCallback(() => setIsExpanded((prev) => !prev), []);
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsExpanded(false);
    if (onOptionChange) onOptionChange(option.value);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        aria-label={ariaLabel}
        className={cn(
          "page-background w-full py-2 px-3 shadow-[inset_0_0_0_1px_#bababa] dark:shadow-[inset_0_0_0_1px_#4b4b4b] rounded-[4px] flex justify-between items-center z-100",
          isChangePending && "opacity-70"
        )}
        title={tooltipLabel}
        disabled={isChangePending}
      >
        <span className="pointer-events-none text-sm/none text-neutral-400 dark:text-neutral-600">
          {selectedOption.label}
        </span>
        <motion.div
          className="pointer-events-none h-1.5 [&_path]:fill-[#a4a4a4] dark:[&_path]:fill-[#4b4b4b]"
          variants={arrowVariants}
          initial="close"
          animate={isExpanded ? "open" : "close"}
          transition={{
            duration: 0.35,
          }}
        >
          <Arrow className="max-h-full" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            variants={menuVariants}
            initial="close"
            animate="open"
            exit="close"
            className="absolute top-[90%] pt-1 left-0 text-sm flex flex-col w-full 
            text-neutral-400 dark:text-neutral-500 bg-neutral-200 dark:bg-neutral-800
            rounded-b cursor-default overflow-hidden -z-10"
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="m-1 py-1 px-2 cursor-pointer hover:bg-[#f1f1f1] dark:hover:bg-[#1e1e1e] rounded-[4px] "
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;

const menuVariants: Variants = {
  close: { height: 0 },
  open: { height: "auto" },
};

const arrowVariants: Variants = {
  close: { rotate: 0 },
  open: {
    rotate: 180,
    transition: {
      duration: 0.35,
    },
  },
};
