import Image from "next/image";

import CartQuantitySelector from "./cart-quantity-selector";

type CartItemProps = {
  name: string;
  variant: string;
  basePrice: number;
  imageUrl: string;
  discountPercentage?: number;
};

const CartItem = (props: CartItemProps) => {
  return (
    <div className=" py-[30px]">
      <div className="flex gap-6">
        <div className="w-28 h-28">
          
          <Image src={props.imageUrl} alt={props.name} width={112} height={112} />
        </div>

        <div className="grow">
          <h2 className="text-[11px] font-semibold text-black mb-[0.48em] uppercase tracking-widest">
            <a href="/">{props.name}</a>
          </h2>
          <div className="uppercase text-zinc-600 font-semibold tracking-widest text-[9px]">
            <p>{props.variant}</p>
            <div className="mt-1">
              <span>₱{props.basePrice}</span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <CartQuantitySelector />
            <button
              type="button"
              className="relative uppercase h-fit text-zinc-700 text-[8px] font-semibold tracking-widest before:absolute before:bg-zinc-400 before:bottom-[-1px] before:left-0 before:w-full before:h-[1px] before:scale-100 before:origin-left-center before:transition-transform before:ease-in-out before:duration-200 hover:before:scale-x-0"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
