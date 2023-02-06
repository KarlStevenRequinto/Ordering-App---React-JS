import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import "./styles.css";
import CartContext from "../../../Store/Cart-Context";

const HeaderCartButton = ({ onClick }) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    // console.log(curNumber)
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `button ${btnHighlighted ? `bump` : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
