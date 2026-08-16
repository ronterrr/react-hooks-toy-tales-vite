import React from "react";

function ToyCard({ name, image, likes, onDonate, toyID, onLike }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button
        className="like-btn"
        onClick={() => {
          const newLikeCount = Number(likes) + 1;
          onLike(toyID, newLikeCount);
        }}
      >
        Like {"<3"}
      </button>
      <button
        className="del-btn"
        onClick={() => {
          onDonate(toyID);
        }}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
