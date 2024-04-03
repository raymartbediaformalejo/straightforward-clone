import { Minus, Plus } from "lucide-react";

const CartQuantitySelector = () => {
  return (
    <div className="flex items-center border border-zinc-300 h-fit">
      <button className="py-[6px] px-2 text-zinc-400 transition-colors ease-in-out duration-200 hover:text-zinc-600">
        <Minus height="16px" width="16px" />
      </button>
      <input
        type="text"
        className="bg-transparent outline-none text-[10px] w-5 text-center"
        defaultValue="1"
      />
      <button className="py-[6px] px-2 text-zinc-400 transition-colors ease-in-out duration-200 hover:text-zinc-600">
        <Plus height="16px" width="16px" />
      </button>
    </div>
  );
};

export default CartQuantitySelector;
