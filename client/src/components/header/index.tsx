import { Menu, ShoppingCart } from "lucide-react";
import Logo from "../svg/Logo";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-10 mb-[-61px]">
      <header className="block text-white bg-transparent ">
        <div className=" flex items-center justify-between px-[15px] py-[17.5px]">
          <button>
            <Menu size="24px" />
          </button>
          <Logo className="fill-white" />
          <button>
            <ShoppingCart />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
