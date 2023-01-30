import Modal from "../../UI/Modal";
import "./styles.css";

const Cart = ({onToggleCartHandler}) => {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: "2", price: 12.99 },
  ].map((item) => {
    return <li>{item.name}</li>;
  });
  return (
    <Modal onClick={onToggleCartHandler}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onToggleCartHandler}>Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
