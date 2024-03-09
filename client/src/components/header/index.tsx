import { Menu, ShoppingCart } from "lucide-react";
import Logo from "../svg/Logo";

const Header = () => {
  return (
    <div>
      <header className="text-black">
        <Menu />
        <Logo color="inherit" />
        <ShoppingCart />
      </header>
    </div>
  );
};

export default Header;
