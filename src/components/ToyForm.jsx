import React, { useState } from "react";

function ToyForm({ toys, setToys }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  async function toyCreate(e) {
    e.preventDefault();

    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };
    try {
      const response = await fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newToy),
      });
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      const data = await response.json();

      setToys([...toys, data]);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={toyCreate}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(i) => {
            setName(i.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(i) => {
            setImage(i.target.value);
          }}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
