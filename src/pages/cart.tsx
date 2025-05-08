import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cart-items";

const cartItems = [{
  productID: "sjsjs",
  photo: "https://c.media-amazon.com/images/I/711NKCLZfaL._SY450_.jpg",
  price: 43000,
  quantity: 5,
  stock: 10,
}];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <>
      <div className="">Cart</div>
      <main>
        {cartItems.map((i,index) => <CartItems key={index}/>)}
      </main>
      <aside>
        <p>SubTotal : ₹{subTotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount: <em> -₹{discount} </em>
        </p>
        <p>
          {" "}
          <b>Total : {total}</b>{" "}
        </p>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off for you with coupon code -{" "}
              <b>
                {" "}
                <code> {couponCode}</code>
              </b>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </>
  );
};

export default Cart;
