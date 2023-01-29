import React from "react";
import MealItemForm from "../MealItemForm";
import "./styles.css";

const MealItem = ({ name, description, price }) => {
  const mealPrice = `$${price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{mealPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
