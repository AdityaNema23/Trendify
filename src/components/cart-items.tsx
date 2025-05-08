type CartItemsProps = {
  cartItem: any;
};

const CartItems = ({ cartItem }: CartItemsProps) => {
  const { photo } = cartItem;
  return <div className="cart-item">CartItems</div>;
};

export default CartItems;
