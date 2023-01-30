import React from "react";
import mealsImage from "../../../Assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton";
import  "./styles.css"
function Header({onToggleCartHandler}) {
  return (
    <>
      <header className="header">
        <h1>Ordering App</h1>
        <HeaderCartButton onClick={onToggleCartHandler}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Meals Background Here!"/>
      </div>
    </>
  );
}

export default Header;
