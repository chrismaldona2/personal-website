import MainInfo from "@/components/MainInfo";
import SocialMediaList from "./SocialMediaList";

const Hero = () => {
  return (
    <div className="h-full flex flex-col justify-between max-w-full ">
      <MainInfo />
      <SocialMediaList />
    </div>
  );
};

export default Hero;
