import React, { useContext } from "react";
import CartContext from "../../../Store/Cart-Context";
import MealItemForm from "../MealItemForm";
import "./styles.css";

const MealItem = ({ name, description, price,id }) => {
  const mealPrice = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const onAddToCart = (amount) => {
    cartCtx.addItem({id:id,name:name,amount:amount,price:price})
  };
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
