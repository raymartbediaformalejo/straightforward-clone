import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator
} from "../ui/select";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";

const NavigationSidebar = () => {
  const [collapsed, setCollapsed] = useState("");
  const [nestedCollapsed, setNestedCollapsed] = useState("");
  const handleAccordionCollapsed = (value: string) => {
    const index = value.indexOf("-");
    setCollapsed(value.charAt(index + 1));
    setNestedCollapsed("");
  };

  console.log("collapsed: ", collapsed);
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
      <ScrollArea className="pl-5 pr-6 mt-20 max-h-dvh grow" theme="dark">
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
                            <a href="/">New Arrival</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Best Sellers</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Digital Gift Cards</a>
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
                            <a href="/">Outwear</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Tees</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Polo Shirts</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Shirts/Overshirts</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Bottoms</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Underwear</a>
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
                            <a href="/">Outwear</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Top</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Shirts</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Bottoms</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Dresses</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Co-ords</a>
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
                            <a href="/">Jewelry</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Belts</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Watches</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Masks</a>
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
                <Accordion
                  type="single"
                  collapsible
                  value={`item-${collapsed}-${nestedCollapsed}`}
                  onValueChange={(value) => {
                    handleNestedAccordionCollapse(value);
                  }}
                >
                  <AccordionItem value="item-2-1">
                    <AccordionTrigger>Finest Essentials</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">NEW! DryTech Series</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">New Arrival</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Best Sellers</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Pet Accessories</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">The Everyday</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Refined Classics</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">The Statement</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Digital Gift Cards</a>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2-2">
                    <AccordionTrigger>Bags</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Tote Bags</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Sling & Crossbody Bags</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Bagpacks</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Duffle Bags</a>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2-3">
                    <AccordionTrigger>Accessories</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Laptop Sleeves</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Wallets</a>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2-4">
                    <AccordionTrigger>BUY 1 Gift 1 free</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Everything at 999</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Everything at 1500</a>
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
                <Accordion
                  type="single"
                  collapsible
                  value={`item-${collapsed}-${nestedCollapsed}`}
                  onValueChange={(value) => {
                    handleNestedAccordionCollapse(value);
                  }}
                >
                  <AccordionItem value="item-3-1">
                    <AccordionTrigger>Finest Essentials</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">New Arrivals</a>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3-2">
                    <AccordionTrigger>For him</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Sneakers</a>
                          </li>
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Sandals</a>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3-3">
                    <AccordionTrigger>For her</AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-[18px]">
                        <ul className="mt-4 mb-1 ml-2 pl-[25px] pr-5 border-l border-gray-600 flex flex-col gap-[18px]">
                          <li className="hover:text-white transition-[color] duration-400 ease-in-out cursor-pointer">
                            <a href="/">Sneakers</a>
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
                href="/"
                className="relative no-underline text-white uppercase flex flex-1 items-center justify-between  transition-[color] text-[11px] duration-200 ease-in-out tracking-[0.2em] py-6"
              >
                Comming soon
              </Link>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-600">
              <Link
                href="/"
                className="relative no-underline text-white uppercase flex flex-1 items-center justify-between  transition-[color] text-[11px] duration-200 ease-in-out tracking-[0.2em] py-6"
              >
                Sale
              </Link>
            </AccordionItem>
          </Accordion>
        </nav>
        <nav className="mt-9">
          <ul className="flex flex-col gap-6 text-gray-650">
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">About</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">Careers</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">Physical Stores</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">Submit Proof of Payment</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">Order Request Form</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">FAQs + Contact</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">Account</a>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-white">
              <a href="/">Search</a>
            </li>
          </ul>
        </nav>
      </ScrollArea>
      <aside className="flex border-t border-gray-600">
        <div className="grid items-center border-r border-gray-600 grow">
          <Select defaultValue="PH">
            <SelectTrigger className="pl-5 bg-transparent w-[120px] border-none text-gray-650 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PH">PH</SelectItem>
              <SelectSeparator />
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
