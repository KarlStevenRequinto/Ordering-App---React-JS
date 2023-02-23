import React from "react";
import Card from "../../UI/Card";
import MealItem from "../MealItem";
import "./styles.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Kaldereta",
    description: "yummy yummy yummy",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken Adobo",
    description: "masarap masarap masarap",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Fried Bangus",
    description: "yum yum yum",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Sisig",
    description: "sarap sarap sarap",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
