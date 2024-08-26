import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import Cart from "@/components/cart/index";

type CartToggleProps = {
  isScrolling?: boolean;
  isPointerInHeader?: boolean;
};

const CartToggle = ({ isScrolling, isPointerInHeader }: CartToggleProps) => {
  return (
    <Sheet>
      <SheetTitle className="hidden" title="cart"/>
      <SheetDescription className="hidden" title="cart"/>
      <SheetTrigger
        className={cn(
          "relative transition-all duration-300 ease-in-out before:absolute before:top-[2px] before:right-[-3px] before:w-[8px] before:h-[8px] before:rounded-lg before:scale-100",
          isScrolling || isPointerInHeader
            ? "before:bg-primary"
            : "before:bg-white "
        )}
      >
        <ShoppingCart
          size="24px"
          className={cn(
            "transition-[color] duration-300 ease-in-out ",
            isScrolling || isPointerInHeader ? "text-primary " : "text-white "
          )}
        />
      </SheetTrigger>
      <SheetContent side="right">
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default CartToggle;
