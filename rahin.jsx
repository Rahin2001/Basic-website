import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [fruits] = useState(["Apple", "Banana", "Mango"]);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>React JSX Single File Example 🚀</h1>

      {/* Input Section */}
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <h3>Hello {name ? name : "Guest"} 👋</h3>
      </div>

      <hr />

      {/* Counter Section */}
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease} style={{ marginLeft: "10px" }}>
          Decrease
        </button>
        <button onClick={reset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>

      <hr />

      {/* List Rendering */}
      <div>
        <h2>Fruit List</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
