import React, { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import "./styles.css";
import CartContext from "../../../Store/Cart-Context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    // console.log(curNumber)
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
