import React from "react";
import mealsImage from "../../../Assets/meals.jpg";
import  "./styles.css"
function Header() {
  return (
    <>
      <header className="header">
        <h1>Ordering App</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Meals Background Here!"/>
      </div>
    </>
  );
}

export default Header;
