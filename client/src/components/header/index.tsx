import Logo from "../svg/Logo";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import MobileToggle from "@/components/mobile-toggle";
import CartToggle from "@/components/cart/cart-toggle";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPointerInHeader, setIsPointerInHeader] = useState(false);

  const handleMouseEnter = () => {
    setIsPointerInHeader(true);
  };
  const handleMouseLeave = () => {
    setIsPointerInHeader(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0 || isPointerInHeader) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPointerInHeader]);

  return (
    <div className="sticky top-0 left-0 w-full z-10 mb-[-65px]">
      <header
        ref={headerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "block text-white transition-[background-color,box-shadow] duration-300 ease-in-out",
          isScrolling || isPointerInHeader ? "bg-white" : "bg-transparent"
        )}
      >
        <div className=" flex items-center justify-between px-[15px] py-[17.5px]">
          <MobileToggle
            isScrolling={isScrolling}
            isPointerInHeader={isPointerInHeader}
          />
          <Logo
            className={cn(
              "transition-[fill] duration-300 ease-in-out",
              isScrolling || isPointerInHeader ? "fill-primary" : "fill-white"
            )}
          />
          <CartToggle
            isScrolling={isScrolling}
            isPointerInHeader={isPointerInHeader}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
