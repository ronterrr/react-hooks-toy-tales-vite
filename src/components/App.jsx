import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    async function fetcher() {
      try {
        const response = await fetch("http://localhost:3001/toys");
        if (!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status}`);
        }

        const data = await response.json();
        setToys(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetcher();
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  async function donateToy(toyID) {
    try {
      const response = await fetch(`http://localhost:3001/toys/${toyID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }

      setToys((currentToys) => {
        return currentToys.filter((toy) => {
          return toy.id !== toyID;
        });
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={donateToy} />
    </>
  );
}

export default App;
