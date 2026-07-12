import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import "./ProductSelectionPage.css";
import ProductList from "../Components/ProductList";
import {
  decrementVenueQuantity,
  incrementVenueQuantity,
} from "../Redux/venueSlice";
import {
  decrementAddonQuantity,
  incrementAddonQuantity,
} from "../Redux/addOnsSlice";
import MealsSelection from "../Components/MealsSelection";
import { toggleMealSelection } from "../Redux/mealsSlice";
import { setPeopleCount } from "../Redux/peopleSlice";
import { useNavigate } from "react-router";

function ProductSelectionPage() {
  const venueItems = useSelector((state) => state.venue);
  const addOnItems = useSelector((state) => state.addOns);
  const mealItems = useSelector((state) => state.meals);
  const numberOfPeople = useSelector((state) => parseInt(state.people.count));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onVenueIncrement = (index) => {
    dispatch(incrementVenueQuantity(index));
  };

  const onVenueDecrement = (index) => {
    dispatch(decrementVenueQuantity(index));
  };

  const onAddOnIncrement = (index) => {
    dispatch(incrementAddonQuantity(index));
  };

  const onAddOnDecrement = (index) => {
    dispatch(decrementAddonQuantity(index));
  };

  const onMealToggle = (index) => {
    dispatch(toggleMealSelection(index));
  };

  const onSetNumberOfPeople = (num) => {
    dispatch(setPeopleCount(num));
  };

  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue") {
      venueItems.forEach((venue) => {
        totalCost += venue.cost * venue.quantity;
      });
    } else if (section === "addOns") {
      addOnItems.forEach((addOn) => {
        totalCost += addOn.cost * addOn.quantity;
      });
    } else if (section === "meals") {
      mealItems.forEach((meal) => {
        if (meal.selected) {
          totalCost += meal.cost * numberOfPeople;
        }
      });
    }
    return totalCost;
  };

  const totalVenueCost = calculateTotalCost("venue");
  const totalAddonCost = calculateTotalCost("addOns");
  const totalMealCost = calculateTotalCost("meals");
  const totalCost = totalVenueCost + totalAddonCost + totalMealCost;

  return (
    <>
      <Navbar />
      <div className="product-selection-page-container">
        <div className="venue-room-selection-container">
          <h2>Venue Room Selection</h2>
          <ProductList
            productItems={venueItems}
            onProductIncrement={onVenueIncrement}
            onProductDecrement={onVenueDecrement}
          />

          <div className="total-cost-container">
            <h3>
              Subtotal Cost:{" "}
              <span className="total-cost">${totalVenueCost.toFixed(2)}</span>
            </h3>
          </div>
        </div>

        <div className="add-on-selection-container">
          <h2>Add-ons Selection</h2>
          <ProductList
            productItems={addOnItems}
            onProductIncrement={onAddOnIncrement}
            onProductDecrement={onAddOnDecrement}
          />
          <div className="total-cost-container">
            <h3>
              Subtotal Cost:{" "}
              <span className="total-cost">${totalAddonCost.toFixed(2)}</span>
            </h3>
          </div>
        </div>

        <div className="meals-selection-container">
          <h2>Meals Selection</h2>
          <MealsSelection
            meals={mealItems}
            numberOfPeople={numberOfPeople}
            onMealToggle={onMealToggle}
            onSetNumberOfPeople={onSetNumberOfPeople}
          />
          <div className="total-cost-container">
            <h3>
              Subtotal Cost:{" "}
              <span className="total-cost">${totalMealCost.toFixed(2)}</span>
            </h3>
          </div>
        </div>

        <div className="grand-total-container">
          <h2>
            Grand Total:{" "}
            <span className="total-cost">${totalCost.toFixed(2)}</span>
          </h2>
          <button
            className="proceed-button"
            onClick={() => {
              if (totalCost > 0) {
                navigate("/checkout");
              }
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductSelectionPage;
