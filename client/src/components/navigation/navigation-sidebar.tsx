import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Link } from "react-router-dom";

const NavigationSidebar = () => {
  return (
    <Accordion type="single" className="pl-[18px] pr-6 mt-20">
      <AccordionItem value="item-1" className="border-b border-gray-600 ">
        <AccordionTrigger className="py-5 text-white">Apparel</AccordionTrigger>
        <AccordionContent className="ml-4">
          <Accordion type="single">
            <AccordionItem value="item-1-1">
              <AccordionTrigger>Finest Essentials</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-2">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-3">
              <AccordionTrigger>For her</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-4">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-5">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-gray-600 ">
        <AccordionTrigger className="py-5 text-white">Bags</AccordionTrigger>
        <AccordionContent className="ml-4">
          <Accordion type="single">
            <AccordionItem value="item-1-1">
              <AccordionTrigger>Finest Essentials</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-2">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-3">
              <AccordionTrigger>For her</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-4">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-5">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b border-gray-600 ">
        <AccordionTrigger className="py-5 text-white">
          Footware
        </AccordionTrigger>
        <AccordionContent className="ml-4">
          <Accordion type="single">
            <AccordionItem value="item-1-1">
              <AccordionTrigger>Finest Essentials</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-2">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-3">
              <AccordionTrigger>For her</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-4">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-5">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <Link to="/" className="">
          Comming soon
        </Link>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-b border-gray-600 ">
        <AccordionTrigger className="py-5 text-white">Sale</AccordionTrigger>
        <AccordionContent className="ml-4">
          <Accordion type="single">
            <AccordionItem value="item-1-1">
              <AccordionTrigger>Finest Essentials</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-2">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-3">
              <AccordionTrigger>For her</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-4">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-5">
              <AccordionTrigger>For him</AccordionTrigger>
              <AccordionContent>
                <div className="pb-[18px]">
                  <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      New Arrival
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Best Sellers
                    </li>
                    <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                      Digital Gift Cards
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NavigationSidebar;
