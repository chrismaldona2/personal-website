import SocialMediaItem from "./SocialMediaItem";
import { socialMediaList } from "@/data/socialMedia";

const SocialMedia = () => {
  return (
    <ul className="flex gap-2.5">
      {socialMediaList.map(({ id, Icon, link, ariaLabel }) => {
        return (
          <li key={id}>
            <SocialMediaItem
              icon={<Icon />}
              redirectTo={link}
              ariaLabel={ariaLabel}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
