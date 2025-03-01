import { SocialMedia } from "@/data/social-media";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface SocialMediaItemProps {
  icon: ReactNode;
  redirectTo: SocialMedia["link"];
  ariaLabel: SocialMedia["ariaLabel"];
}

const SocialMediaItem = ({
  icon,
  redirectTo,
  ariaLabel,
}: SocialMediaItemProps) => {
  const t = useTranslations();
  return (
    <a
      href={redirectTo}
      aria-label={t(ariaLabel)}
      className="flex justify-center items-center
                  max-w-fit p-2
                  rounded-lg border border-solid border-neutral-500 cursor-pointer
                  transition-transform duration-300 ease-in focus:scale-96  hover:scale-105
                  dark:text-neutral-50 text-neutral-800            
                  "
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="size-6 lg:size-7">{icon}</div>
    </a>
  );
};

export default SocialMediaItem;
