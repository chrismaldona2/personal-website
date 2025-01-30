import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Maldonado",
  description: "Full-stack developer portfolio website.",
  icons: "/assets/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-(--background) ${inter.className}`}>{children}</body>
    </html>
  );
}
