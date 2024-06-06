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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="header">
        <h2>The Magical Date Counter</h2>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label>Steps: {step}</label>
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
        <button onClick={() => setCount((c) => c - step)}>Sub ➖</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>Add ➕</button>
      </div>

      {count !== 0 || step !== 1 ? (
        <div className="reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
