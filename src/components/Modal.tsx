"use client";

import { useRouter } from "@/i18n/routing";
import { ReactNode } from "react";
import { motion, Variants } from "motion/react";

const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };

  return (
    <motion.div
      variants={modal}
      initial="close"
      animate="open"
      exit="close"
      className="isolate fixed z-50 w-screen h-screen"
    >
      <motion.div
        variants={content}
        initial="close"
        animate="open"
        exit="close"
        transition={{
          type: "tween",
        }}
        className="absolute bottom-0 h-[90%] bg-[#e3e3e3] dark:bg-[#212121] w-[90%] p-12 rounded-md z-10"
        style={{
          left: "50%",
          x: "-50%",
        }}
      >
        <div className="flex justify-end">
          <button
            onClick={handleOpenChange}
            className="py-2 px-3 bg-neutral-500 dark:bg-neutral-900 rounded-md text-neutral-50 dark:text-neutral-400"
          >
            Close
          </button>
        </div>
        {children}
      </motion.div>
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
    </motion.div>
  );
};

export default Modal;

const modal: Variants = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const content: Variants = {
  close: {
    y: "100%",
  },
  open: {
    y: 0,
  },
};
