import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="header">
        <h2>The Magical Date Counter</h2>
        <input type="range" min="0" max="10" />
        <label>{step}</label>
      </div>

      <div className="showdate">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>

      <div className="footer">
        <button onClick={() => setCount((c) => c - 1)}>Sub ➖</button>
        <input type="text" value={count} />
        <button onClick={() => setCount((c) => c + 1)}>Add ➕</button>
      </div>
    </>
  );
}
