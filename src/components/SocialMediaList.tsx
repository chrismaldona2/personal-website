import SocialMediaItem from "./SocialMediaItem";
import { GithubIcon } from "./SocialMediaIcons";

const SocialMediaList = () => {
  return (
    <div className="flex gap-4">
      {socialMedia.map(({ id, icon, link, ariaLabel }) => {
        return (
          <SocialMediaItem
            key={id}
            icon={icon}
            redirectTo={link}
            ariaLabel={ariaLabel}
          />
        );
      })}
    </div>
  );
};

export default SocialMediaList;

const socialMedia = [
  {
    id: 1,
    icon: <GithubIcon className="size-[2.5rem]" />,
    link: "https://github.com/chrismaldona2",
    ariaLabel: "Go to Github",
  },
];
