import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

const Collection = () => {
  return (
    <div>
      <Carousel className="relative" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div
              data-slide-index={0}
              className="flex items-center justify-center relative h-[450px]  overflow-hidden"
            >
              <div
                className="flex w-full h-full items-center scale-100 justify-center absolute top-0 left-0  bg-cover bg-center-center overflow-hidden after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black/70 to-black/10 transition-[transform] duration-8000 ease-zoom-in-bg hover:scale-125"
                style={{
                  backgroundImage: `url(//www.shopstraightforward.com/cdn/shop/files/IMG_0357_3_750x960_crop_center.jpg?v=1711942440)`,
                }}
              />
              <header
                data-content="collection-header"
                className="relative z-10 grid items-center font-semibold tracking-widest text-center text-white uppercase gap-y-6"
              >
                <h3 className="text-sm">Mix & Match</h3>
                <h2 className="text-2xl">Buy 1 Take 1</h2>
                <Button variant="secondary">View Products</Button>
              </header>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              data-slide-index={1}
              className="flex items-center justify-center relative h-[450px]  overflow-hidden"
            >
              <div
                className="flex w-full h-full items-center scale-100 justify-center absolute top-0 left-0  bg-cover bg-center-center overflow-hidden after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black/70 to-black/10 transition-[transform] duration-8000 ease-zoom-in-bg hover:scale-125"
                style={{
                  backgroundImage: `url(//www.shopstraightforward.com/cdn/shop/files/viber_image_2024-04-01_11-46-52-167_750x960_crop_center.jpg?v=1711943746)`,
                }}
              />
              <header className="relative z-10 grid items-center font-semibold tracking-widest text-center text-white uppercase gap-y-6">
                <h3 className="text-sm">Statement Pieces</h3>
                <h2 className="text-2xl">Single Bags</h2>
                <Button variant="secondary">View Products</Button>
              </header>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              data-slide-index={2}
              className="flex items-center justify-center relative h-[450px]  overflow-hidden"
            >
              <div
                className="flex w-full h-full items-center scale-100 justify-center absolute top-0 left-0  bg-cover bg-center-center overflow-hidden after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black/70 to-black/10 transition-[transform] duration-8000 ease-zoom-in-bg hover:scale-125"
                style={{
                  backgroundImage: `url(//www.shopstraightforward.com/cdn/shop/files/Q1-Ecom-Shoot-2076_750x960_crop_center.jpg?v=1711942927)`,
                }}
              />
              <div>
                <header className="relative z-10 grid items-center font-semibold tracking-widest text-center text-white uppercase gap-y-6">
                  <h3 className="text-sm">Mix & Match</h3>
                  <h2 className="text-2xl">Buy 1 Take 1</h2>
                  <Button variant="secondary">View Products</Button>
                </header>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div
              data-slide-index={3}
              className="flex items-center justify-center relative h-[450px]  overflow-hidden"
            >
              <div
                className="flex w-full h-full items-center scale-100 justify-center absolute top-0 left-0  bg-cover bg-center-center overflow-hidden after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black/70 to-black/10 transition-[transform] duration-8000 ease-zoom-in-bg hover:scale-125"
                style={{
                  backgroundImage: `url(//www.shopstraightforward.com/cdn/shop/files/Q1-Women_s-Ecomm3460_1_750x960_crop_center.jpg?v=1711947824)`,
                }}
              />
              <div>
                <header className="relative z-10 grid items-center font-semibold tracking-widest text-center text-white uppercase gap-y-6">
                  <h3 className="text-sm">Beyond Boundaries</h3>
                  <h2 className="text-2xl">Women's Apparel</h2>
                  <Button variant="secondary">View Products</Button>
                </header>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              data-slide-index={4}
              className="flex items-center justify-center relative h-[450px]  overflow-hidden"
            >
              <div
                className="flex w-full h-full items-center scale-100 justify-center absolute top-0 left-0  bg-cover bg-center-center overflow-hidden after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black/70 to-black/10 transition-[transform] duration-8000 ease-zoom-in-bg hover:scale-125"
                style={{
                  backgroundImage: `url(//www.shopstraightforward.com/cdn/shop/files/accessories2_750x960_crop_center.jpg?v=1711944714)`,
                }}
              />
              <div>
                <header className="relative z-10 grid items-center font-semibold tracking-widest text-center text-white uppercase gap-y-6">
                  <h3 className="text-sm">Boundless Brilliance</h3>
                  <h2 className="text-2xl">Accessories</h2>
                  <Button variant="secondary">View Products</Button>
                </header>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              data-slide-index={5}
              className="flex items-center justify-center relative h-[450px]  overflow-hidden"
            >
              <div
                className="flex w-full h-full items-center scale-100 justify-center absolute top-0 left-0  bg-cover bg-center-center overflow-hidden after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black/70 to-black/10 transition-[transform] duration-8000 ease-zoom-in-bg hover:scale-125"
                style={{
                  backgroundImage: `url(//www.shopstraightforward.com/cdn/shop/files/viber_image_2024-04-01_12-05-19-724_750x960_crop_center.jpg?v=1711944462)`,
                }}
              />
              <div>
                <header className="relative z-10 grid items-center font-semibold tracking-widest text-center text-white uppercase gap-y-6">
                  <h3 className="text-sm">Polished Strides</h3>
                  <h2 className="text-2xl">Footwear</h2>
                  <Button variant="secondary">View Products</Button>
                </header>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="absolute left-6 bottom-8" />
      </Carousel>
      <div className="h-auto overflow-hidden">
        <img
          className="w-full"
          src="//www.shopstraightforward.com/cdn/shop/files/432739363_408693131807411_8587999582659222486_n_x800.png?v=1711501846"
        />
      </div>
    </div>
  );
};

export default Collection;
