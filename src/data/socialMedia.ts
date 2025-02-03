import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ComponentType } from "react";

export interface SocialMedia {
  id: number;
  Icon: ComponentType;
  link: string;
  ariaLabel: string;
}

export const socialMediaList: SocialMedia[] = [
  {
    id: 1,
    Icon: GithubIcon,
    link: "https://github.com/chrismaldona2",
    ariaLabel: "home.socialMedia.githubAriaLabel",
  },
  {
    id: 2,
    Icon: LinkedinIcon,
    link: "https://linkedin.com/in/chris-ariel-maldonado/",
    ariaLabel: "home.socialMedia.linkedinAriaLabel",
  },
];
