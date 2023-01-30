import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onToggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <>
      {cartIsShown && <Cart onToggleCartHandler={onToggleCartHandler} />}
      <Header onToggleCartHandler={onToggleCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
