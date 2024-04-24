import Collection from "./Collection";
import FeaturedCollection from "./FeaturedCollection";
import HomeHeroSection from "./home-hero-section";

const HomeContent = () => {
  return (
    <>
      <HomeHeroSection />
      <Collection />
      <FeaturedCollection />
    </>
  );
};

export default HomeContent;
