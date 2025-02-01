import SocialMediaItem from "./SocialMediaItem";
import { socialMedia } from "@/data/socialMedia";

const SocialMediaList = () => {
  return (
    <div className="flex gap-2.5 w-full">
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
