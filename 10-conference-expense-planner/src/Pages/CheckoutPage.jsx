import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import "./CheckoutPage.css";

function CheckoutPage() {
  const venueItems = useSelector((state) => state.venue);
  const addOns = useSelector((state) => state.addOns);
  const mealItems = useSelector((state) => state.meals);
  const numberOfPeople = useSelector((state) => parseInt(state.people.count));
  
  let totalCost = 0;


  const getItemsAndCost = () => {
    const items = [];
    
    venueItems.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ ...item, type: "venues" });
        totalCost += item.cost * item.quantity;
      }
    });
    addOns.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ ...item, type: "addOns" });
        totalCost += item.cost * item.quantity;
      }
    });
    mealItems.forEach((item) => {
      if (item.selected) {
        items.push({ ...item, quantity: numberOfPeople, type: "meals" });
        totalCost += item.cost * numberOfPeople;
      }
    });

    return items;
  };

  const items = getItemsAndCost();

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <h3>Checkout</h3>
        <h1>Total cost for the event: ${totalCost}</h1>
        <table className="checkout-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.cost * item.quantity}</td>
              </tr>
            ))}
            <tr>
              <td><b>Total: </b></td>
              <td></td>
              <td></td>
              <td><span className="total-cost">${totalCost}</span></td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => alert("Thank you for your order!")}>Checkout</button>
      </div>
    </>
  );
}

export default CheckoutPage;
