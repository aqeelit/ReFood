import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Cartprovider from "./context/ContextProvider";
import "./App.css";

function App() {
  const [cartIsShow , setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }


  return (
    <Cartprovider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header  onShowTheCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
