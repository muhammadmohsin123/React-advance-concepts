import React, { useContext } from "react";
import { myContext } from "./MyContext";
function Card() {
  const value = useContext(myContext);
  console.log(value);
  return (
    <div>
      {value.map((el) => (
        <div key={el.email}>
          <h1>name: {el.name}</h1>
          <p>email:{el.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
