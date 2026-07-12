import "./ProductList.css";

function ProductList({ productItems, onProductIncrement, onProductDecrement }) {
  return (
    <div className="product-list-container">
      {productItems.map((product, index) => {
        return (
          <div className="product-item-container" key={index}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Cost: ${product.cost}</p>
            <span className="quantity">
              <button
                disabled={
                  product.name === "Auditorium Hall (Capacity: 200)" &&
                  product.quantity >= 3
                }
                onClick={() => onProductIncrement(index)}
              >
                +
              </button>

              <p>Quantity: {product.quantity}</p>
              <button onClick={() => onProductDecrement(index)}>-</button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
