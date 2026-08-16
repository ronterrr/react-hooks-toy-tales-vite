import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  return (
    <div id="toy-collection">{toys.map((i)=>{
      return <ToyCard name={i.name} image={i.image} likes={i.likes}/>
    })}</div>
  );
}

export default ToyContainer;
