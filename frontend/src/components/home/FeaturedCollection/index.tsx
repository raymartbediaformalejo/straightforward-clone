import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FeaturedCollectionItem from "./featured-collection-item";

const FeaturedCollection = () => {
  return (
    <section className="flex flex-col py-8 justify-items-center">
      <header className="mb-16 font-semibold text-center uppercase">
        <h3 className="text-xs  tracking-[2.4px] ">Discover the latest</h3>
        <h2 className="mt-4 text-xl tracking-[4px] ">The Female Range</h2>
      </header>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>
              <FeaturedCollectionItem />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <Button>View all Products</Button>
    </section>
  );
};

export default FeaturedCollection;
