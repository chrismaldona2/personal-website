import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Providers } from "../providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Maldonado",
  description: "Full-stack web developer portfolio website.",
  icons: "/favicon.svg",
  robots: "index, follow",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-neutral-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <SmoothScroll root>{children}</SmoothScroll>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
