import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate, onLike }) {
  return (
    <div id="toy-collection">
      {toys.map((i) => {
        return (
          <ToyCard
            name={i.name}
            image={i.image}
            likes={i.likes}
            onDonate={onDonate}
            toyID={i.id}
            onLike={onLike}
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;
