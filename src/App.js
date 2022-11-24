import { useState } from "react";

function App() {
  // HOOKS adalah WAJIB DIDALAM FUNCTIONAL COMPONENTS
  const [count, setCount] = useState(0);

  // controller di UI
  const handlingCount = (type) => {
    // cara lama
    // if (type === "increase") {
    //   setCount((prevState) => prevState + 1);
    // } else {
    //   if (count === 0) return;
    //   setCount((prevState) => prevState - 1);
    // }

    // cara dari experiment
    setCount(
      type === "increase"
        ? (prevState) => prevState + 1
        : type === "decrease"
        ? (prevState) => (prevState !== 0 ? prevState - 1 : prevState)
        : (prevState) => (prevState = 0)
    );
  };

  return (
    <section style={{ justifyContent: "center", display: "flex" }}>
      <div
        style={{ borderStyle: "solid", padding: "20px", marginTop: "25px", borderRadius: "20px" }}
      >
        {/* this is one way binding */}
        <h2> Count : {count}</h2>
        <button onClick={() => handlingCount("increase")}>Increase</button> &nbsp;
        <button onClick={() => handlingCount("decrease")}>Decrease</button> &nbsp;
        <button onClick={() => handlingCount("reset")}>Reset</button>
      </div>
    </section>
  );
}

export default App;
