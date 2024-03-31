import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./cart-item";

const Cart = () => {
  return (
    <>
      <div className="flex items-center pl-6 pr-4 border h-header-height shadow-divider-bottom">
        <span className="text-xl tracking-widest uppercase">Cart</span>
      </div>
      <div className="flex flex-col h-100%-header-height">
        <ScrollArea
          theme="light"
          className="flex flex-col flex-auto overflow-auto max-h-dvh"
        >
          <CartItem
            name="Kazuno Tee"
            variant="WK Onyx Black / XS"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-ONYX-BLACK-Front_240x.png?v=1708411205"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Sweet Pea / XS"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-SWEET-PEA-Front_240x.png?v=1708411205"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
          <CartItem
            name="Kazuno Tee"
            variant="WK Cream / XL"
            basePrice={1200}
            imageUrl="https://www.shopstraightforward.com/cdn/shop/files/Kazuno-CREAM-front_240x.png?v=1708393385"
          />
        </ScrollArea>
        <div className="py-8 translate-y-0 px-7 shadow-divider-top">
          <div className="grid gap-[10px] grid-cols-[1fr_100px]">
            <Input
              className="rounded-none border-zinc-300 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 "
              placeholder="Discount Code"
            />
            <Button type="button" size="sm" className="h-auto">
              Apply
            </Button>
            <span>Subtotal:</span>
            <span className="justify-self-end">₱7,000.00</span>
          </div>
          <div className="py-2">
            <p>
              Take note: Orders with Stamping Service must be paid in advance
              and is not applicable with Cash On Delivery (COD). Customers will
              receive non-personalized items if there is no proof of payment
              presented within 3 days. Shipping & taxes calculated at checkout
            </p>
          </div>

          <Button className="w-full mt-4">{`Checkout ~ ₱${7000}`}</Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
