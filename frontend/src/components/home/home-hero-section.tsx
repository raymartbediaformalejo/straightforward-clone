"use client"

import { Button } from "@/components/ui/button";

const HomeHeroSection = () => {
  const windowHeight = window?.innerHeight;
  console.log(windowHeight);
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: ` calc(${windowHeight}px - 38px)` }}
    >
      <img
        className="block object-cover object-center h-full z-[-10] sm:hidden w-full"
        src="https://www.shopstraightforward.com/cdn/shop/files/MOBILE_BANNERSlider_2_2a4ff1c3-432a-4a2c-8e6d-8a2adc5b67c3_x800.png?v=1709637534"
        alt="Purple Polo-shirt"
      />
      <img
        className="hidden object-cover object-center h-full z-[-10] sm:block w-full"
        src="https://www.shopstraightforward.com/cdn/shop/files/MOBILE_BANNERSlider_2_2a4ff1c3-432a-4a2c-8e6d-8a2adc5b67c3_x800.png?v=1709637534"
        alt="Purple Polo-shirt"
        data-sizes="auto"
        srcSet="MAIN_BANNER_-_DESKTOP_4d68bd20-f16e-4b72-b12c-8bb761b4e0fc_1000x.png?v=1709626183 1000w, //www.shopstraightforward.com/cdn/shop/files/MAIN_BANNER_-_DESKTOP_4d68bd20-f16e-4b72-b12c-8bb761b4e0fc_1200x.png?v=1709626183 1200w, //www.shopstraightforward.com/cdn/shop/files/MAIN_BANNER_-_DESKTOP_4d68bd20-f16e-4b72-b12c-8bb761b4e0fc_1400x.png?v=1709626183 1400w, //www.shopstraightforward.com/cdn/shop/files/MAIN_BANNER_-_DESKTOP_4d68bd20-f16e-4b72-b12c-8bb761b4e0fc_1600x.png?v=1709626183 1600w, //www.shopstraightforward.com/cdn/shop/files/MAIN_BANNER_-_DESKTOP_4d68bd20-f16e-4b72-b12c-8bb761b4e0fc_1800x.png?v=1709626183 1800w"
        sizes="(min-width: 40em) 1400px, (min-width: 64em) 1600px, (min-width: 72em) 1800px, 100vw"
      />
      <div className="absolute block w-full py-6 text-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <Button variant="secondary">See the collection here</Button>
      </div>
    </section>
  );
};

export default HomeHeroSection;
