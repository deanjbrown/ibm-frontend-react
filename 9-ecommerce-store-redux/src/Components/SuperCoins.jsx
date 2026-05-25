import { useSelector } from "react-redux";
import "./SuperCoins.css";

const SuperCoins = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  let superCoins;
  if (orderAmount >= 100 && orderAmount < 200) {
    superCoins = 10;
  } else if (orderAmount >= 200 && orderAmount < 300) {
    superCoins = 20;
  } else if (orderAmount >= 300) {
    superCoins = 30;
  } else {
    superCoins = 0;
  }

  return (
    <div className="super-coins">
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-amount">
        You will earn {superCoins} Super Coins with this order.
      </p>
    </div>
  );
};

export default SuperCoins;
