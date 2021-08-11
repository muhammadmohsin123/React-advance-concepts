import React from "react";
import CardContainer from "./CardContainer";

import { myContext } from "./MyContext";
const users = [
  { name: "mohsin", email: "abc@gmail.com" },
  { name: "ali", email: "ali@gmail.com" },
];
function App() {
  return (
    <myContext.Provider value={users}>
      <CardContainer />;
    </myContext.Provider>
  );
}

export default App;
