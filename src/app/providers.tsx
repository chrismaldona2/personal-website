import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScroll root>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
