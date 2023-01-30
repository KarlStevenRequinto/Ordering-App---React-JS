import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/Cart-Provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onToggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onToggleCartHandler={onToggleCartHandler} />}
      <Header onToggleCartHandler={onToggleCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
