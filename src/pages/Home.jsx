import '../scss/pages/home.scss'; // Import the CSS file for styling
import  { useState, useEffect } from 'react';


export default function Home() {
    const [newPromise, setNewPromise] = useState('');
  const [promises, setPromises] = useState([]);

  // Load promises from local storage when the component mounts
  useEffect(() => {
    const storedPromises = JSON.parse(localStorage.getItem('promises')) || [];
    setPromises(storedPromises);
  }, []);

  // Update local storage when promises state changes
  useEffect(() => {
    localStorage.setItem('promises', JSON.stringify(promises));
  }, [promises]);

  const addPromise = () => {
    if (newPromise.trim() !== '') {
      setPromises([...promises, newPromise]);
      setNewPromise('');
    }
  };

  const deletePromise = (index) => {
    const updatedPromises = [...promises];
    updatedPromises.splice(index, 1);
    setPromises(updatedPromises);
  };
  return (
    <main id="Home-img">
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
  </main>
  );
}
