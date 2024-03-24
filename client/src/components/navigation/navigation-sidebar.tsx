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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const NavigationSidebar = () => {
  const [collapsed, setCollapsed] = useState("");
  const [nestedCollapsed, setNestedCollapsed] = useState("");
  const handleAccordionCollapsed = (value: string) => {
    const index = value.indexOf("-");
    setCollapsed(value.charAt(index + 1));
  };

  console.log("nestedCollapsed: ", nestedCollapsed);

  const handleNestedAccordionCollapse = (value: string) => {
    const item = value.match(/[^-]+$/);
    if (item !== null) {
      const characters = item[0];
      setNestedCollapsed(characters);
    } else {
      setNestedCollapsed("");
    }
    console.log(value);
  };
  return (
    <div className="flex flex-col h-full">
      <div className="pl-5 pr-6 mt-20 overflow-y-auto grow">
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
              <AccordionTrigger className="py-6 text-white">
                Apparel
              </AccordionTrigger>
              <AccordionContent className="ml-4">
                <Accordion
                  type="single"
                  collapsible
                  value={`item-${collapsed}-${nestedCollapsed}`}
                  onValueChange={(value) => {
                    handleNestedAccordionCollapse(value);
                  }}
                >
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
              <AccordionTrigger className="py-6 text-white">
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
              <AccordionTrigger className="py-6 text-white">
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
                className="relative no-underline text-white uppercase flex flex-1 items-center justify-between  transition-[color] text-[11px] duration-200 ease-in-out tracking-[0.2em] py-6"
              >
                Comming soon
              </Link>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-600 ">
              <AccordionTrigger className="py-6 text-white">
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
        <nav className="mt-9">
          <ul className="flex flex-col gap-6 text-gray-650">
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
      <aside className="flex border-t border-gray-600">
        <div className="grid items-center border-r border-gray-600 grow">
          <Select defaultValue="PH">
            <SelectTrigger className="pl-5 bg-transparent w-[120px] border-none text-gray-650 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PH">PH</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ul className="flex items-center w-full justify-evenly">
          <li className="my-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="">
                    <Facebook
                      className="transition-colors duration-200 ease-in-out text-gray-650 hover:text-white"
                      width="1.2em"
                      height="1.2em"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li className="my-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="">
                    <Instagram
                      className="transition-colors duration-200 ease-in-out text-gray-650 hover:text-white"
                      width="1.2em"
                      height="1.2em"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default NavigationSidebar;
