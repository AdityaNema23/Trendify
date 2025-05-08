import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductProps) => {
  console.log("hello from ");

  return (
    <div className="product-card">
      <img src={photo} alt="" />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button onClick={handler}>
          <FaPlus></FaPlus>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
