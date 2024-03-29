import { useContext } from "react";
import CartContext from "../../../Store/Cart-Context";
import Modal from "../../UI/Modal";
import CartItem from "../CartItem";
import "./styles.css";

const Cart = ({ onToggleCartHandler }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const carItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={carItemAddHandler.bind(null,item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={onToggleCartHandler}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onToggleCartHandler}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
