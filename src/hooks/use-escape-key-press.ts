// detects when the Escape key is pressed
"use client";
import { useEffect, RefObject } from "react";

export const useEscapeKeyPress = (
  callback?: () => void,
  ref?: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!callback) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (ref && ref.current && document.activeElement === ref.current) {
          callback();
        } else if (!ref) {
          callback();
        }
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [callback, ref]);
};
