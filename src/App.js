import React from "react";
import Header from "./Components/Layout/Header.js";
import Meals from "./Components/Meals/Meals.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
