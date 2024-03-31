type CartItemProps = {
  name: string;
  variant: string;
  basePrice: number;
  imageUrl: string;
  discountPercentage?: number;
};

const CartItem = (props: CartItemProps) => {
  return (
    <div className="flex my-[30px]">
      <div className="w-28 h-28">
        <img src={props.imageUrl} alt={props.name} />
      </div>

      <div>
        <h2>
          <a href="/">{props.name}</a>
        </h2>
        <div>
          <p>{props.variant}</p>
          <div>
            <span>₱{props.basePrice}</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartItem;
