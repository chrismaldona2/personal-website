import SmoothScroll from "@/components/layout/smooth-scroll";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <SmoothScroll root>{children}</SmoothScroll>;
}
