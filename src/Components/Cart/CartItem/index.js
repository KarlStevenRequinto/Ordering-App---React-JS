import "./styles.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item-item">
      <div>
        <h2>{props.name}</h2>
        <div className="summary-cart-item">
          <span className="price-item">{price}</span>
          <span className="amount-item">x {props.amount}</span>
        </div>
      </div>
      <div className="actions-cart-item">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
