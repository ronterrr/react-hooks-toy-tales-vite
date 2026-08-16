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

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
