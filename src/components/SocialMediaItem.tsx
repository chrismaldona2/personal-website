import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  redirectTo: string;
  ariaLabel: string;
}

const SocialMediaItem = ({ icon, redirectTo, ariaLabel }: Props) => {
  return (
    <a
      href={redirectTo}
      aria-label={ariaLabel}
      className="flex justify-center items-center
                  max-w-fit p-2
                  rounded-lg border border-solid border-neutral-500 cursor-pointer
                  transition duration-300 ease-in focus:scale-96  hover:scale-105
                  dark:[&_path]:fill-neutral-50 [&_path]:fill-neutral-800            
                  "
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="size-6 lg:size-7">{icon}</div>
    </a>
  );
};

export default SocialMediaItem;
