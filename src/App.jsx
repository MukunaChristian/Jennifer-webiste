import { useState } from "react";
import "./App.css";

function App() {
  const [promises, setPromises] = useState([]);
  const [newPromise, setNewPromise] = useState("");

  const addPromise = () => {
    if (newPromise.trim() !== "") {
      setPromises([...promises, newPromise.trim()]);
      setNewPromise("");
    }
  };

  const deletePromise = (index) => {
    const updatedPromises = promises.filter((_, i) => i !== index);
    setPromises(updatedPromises);
  };

  return (
    <div className="app">
      <h1>Promise Wall</h1>
      <div className="promise-form">
        <input
          type="text"
          value={newPromise}
          onChange={(e) => setNewPromise(e.target.value)}
          placeholder="Write a promise..."
        />
        <button onClick={addPromise}>Add Promise</button>
      </div>
      <div className="promise-list">
        <h2>Promises:</h2>
        <ul>
          {promises.map((promise, index) => (
            <li key={index}>
              <span>{promise}</span>
              <button onClick={() => deletePromise(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
