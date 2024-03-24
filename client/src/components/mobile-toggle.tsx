import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavigationSidebar from "./navigation/navigation-sidebar";
import { cn } from "@/lib/utils";

type MobileToggleProps = {
  isScrolling?: boolean;
  isPointerInHeader?: boolean;
};

const MobileToggle = ({
  isScrolling,
  isPointerInHeader,
}: MobileToggleProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          size="24px"
          className={cn(
            "transition-[color] duration-300 ease-in-out",
            isScrolling || isPointerInHeader ? "text-primary" : "text-white"
          )}
        />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 border-none bg-primary">
        <NavigationSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
