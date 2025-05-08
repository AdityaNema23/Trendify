import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemsProps = {
  cartItem: any;
};

const CartItems = ({ cartItem }: CartItemsProps) => {
  const { productID, photo, price, quantity, stock } = cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productID}`}>{name}</Link>
        <span>Macbook : ₹{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItems;
