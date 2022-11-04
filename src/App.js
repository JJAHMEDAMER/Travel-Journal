import React from "react";

// Data
import data from "./data";

//Comp
import NavBar from "./comp/NavBar";
import Card from "./comp/card";

let cardList = data.map((item) => <Card {...item} />);

function App() {
  return (
    <div>
      <NavBar />
      {cardList}
    </div>
  );
}

export default App;
