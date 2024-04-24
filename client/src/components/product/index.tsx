type ProductProps = {
  name: string;
  price: number;
  discountPercentage?: number;
  imageUrl: string;
  category: string;
  variant: {
    size?: string;
    color?: {
      name: string;
      imageUrl: string;
    };
  };
  quantity?: number;
  description?: string;
};

const Product = () => {
  return <div>Product</div>;
};

export default Product;
