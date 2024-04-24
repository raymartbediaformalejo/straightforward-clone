import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FeaturedCollectionItem from "./featured-collection-item";

const FeaturedCollection = () => {
  return (
    <section>
      <header>
        <h3>Discover the latest</h3>
        <h2>Beyond Beyond</h2>
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
