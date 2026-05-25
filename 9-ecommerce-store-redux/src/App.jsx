import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import SuperCoins from "./Components/SuperCoins";

function App() {
  return (
    <>
      <h1 className="app-heading">Welcome to the E-commerce Store</h1>
      <ProductList />
      <ShoppingCart />
      <SuperCoins />
    </>
  );
}

export default App;
