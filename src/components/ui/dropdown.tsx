"use client";
import { AnimatePresence, Variants, motion } from "motion/react";
import { useState, useCallback, useRef } from "react";
import { Arrow } from "./icons";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useClickOutside } from "@/hooks/use-click-outside";

export interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  defaultOption?: Option;
  onOptionChange?: (value: Option["value"]) => void;
  isChangePending?: boolean;
  ariaLabel?: string;
  tooltipLabel?: string;
}

const Dropdown = ({
  options,
  defaultOption,
  ariaLabel,
  onOptionChange,
  isChangePending,
  tooltipLabel,
}: DropdownProps) => {
  const t = useTranslations("shared.comboBox");
  const dropdownRef = useRef<null | HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultOption || (options.length > 0 ? options[0] : null)
  );

  const toggleMenu = useCallback(() => setIsExpanded((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsExpanded(false), []);

  useClickOutside(dropdownRef, closeMenu);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    closeMenu();
    onOptionChange?.(option.value);
  };

  return (
    <div className="relative isolate" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className={cn(
          "page-background w-full py-2 px-3 shadow-[inset_0_0_0_1px_#bababa] dark:shadow-[inset_0_0_0_1px_#4b4b4b] rounded-[4px] flex justify-between items-center",
          isChangePending && "opacity-70"
        )}
        title={tooltipLabel}
        disabled={isChangePending}
        aria-label={ariaLabel || t("ariaLabel")}
        role="combobox"
        aria-expanded={isExpanded}
        aria-controls="dropdown-menu"
        aria-haspopup="listbox"
      >
        <span className=" text-sm/none text-neutral-400 dark:text-neutral-600">
          {selectedOption?.label || t("defaultPlaceholder")}
        </span>
        <motion.div
          className=" h-1.5 [&_path]:fill-[#a4a4a4] dark:[&_path]:fill-[#4b4b4b]"
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
            {options.length === 0 ? (
              <li
                className="m-1 py-1 px-2 select-none rounded-[4px] transition-colors duration-300"
                role="status"
              >
                {t("noOptionsAvailable")}
              </li>
            ) : (
              options.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selectedOption?.value === option.value}
                  onClick={() => handleOptionClick(option)}
                  onTouchStart={() => handleOptionClick(option)}
                  className="m-1 py-1 px-2 cursor-pointer hover:bg-[#f1f1f1] dark:hover:bg-[#1e1e1e] rounded-[4px] transition-colors duration-300"
                >
                  {option.label}
                </li>
              ))
            )}
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
