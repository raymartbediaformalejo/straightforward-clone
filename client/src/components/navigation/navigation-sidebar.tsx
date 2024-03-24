import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const NavigationSidebar = () => {
  const [collapsed, setCollapsed] = useState("2");
  const handleAccordionCollapsed = (value: string) => {
    const index = value.indexOf("-");
    setCollapsed(value.charAt(index + 1));
  };
  return (
    <div className="flex flex-col h-full">
      <div className="pl-[18px] pr-6 mt-20 grow overflow-y-auto">
        <nav>
          <Accordion
            type="single"
            collapsible
            value={`item-${collapsed}`}
            onValueChange={(value) => {
              handleAccordionCollapsed(value);
            }}
          >
            <AccordionItem value="item-1" className="border-b border-gray-600 ">
              <AccordionTrigger className="py-5 text-white">
                Apparel
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
            <AccordionItem value="item-2" className="border-b border-gray-600 ">
              <AccordionTrigger className="py-5 text-white">
                Bags
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
            <AccordionItem value="item-4" className="border-b border-gray-600">
              <Link
                to="/"
                className="relative no-underline text-white uppercase flex flex-1 items-center justify-between  transition-[color] text-[11px] duration-200 ease-in-out tracking-[0.2em] py-5"
              >
                Comming soon
              </Link>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-600 ">
              <AccordionTrigger className="py-5 text-white">
                Sale
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
          </Accordion>
        </nav>
        <nav className="mt-8">
          <ul className="flex flex-col text-gray-650 gap-[18px]">
            <li className="transition-colors duration-200 ease-in-out hover:text-white ">
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Physical Stores</a>
            </li>
            <li>
              <a href="/">Submit Proof of Payment</a>
            </li>
            <li>
              <a href="/">Order Request Form</a>
            </li>
            <li>
              <a href="/">FAQs + Contact</a>
            </li>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">Search</a>
            </li>
          </ul>
        </nav>
      </div>
      <aside>
        <div>
          <Select defaultValue="PH">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PH">PH</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ul>
          <li>
            <a href="">
              <Facebook className="text-gray-650" />
            </a>
          </li>
          <li>
            <a href="">
              <Instagram className="text-gray-650" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default NavigationSidebar;
