import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 75 },
    { id: 3, name: "Product C", price: 120 },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Get the cart items from the Redux store

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Dispatch the action to add the item to the cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => (
          <li key={product.name} className="product-list-item">
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              className={`add-to-cart-btn ${cartItems.some((item) => item.id === product.id) ? "disabled" : ""}`}
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)} // Disable the button if the item is already in the cart
            >
              {cartItems.some((item) => item.id === product.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
