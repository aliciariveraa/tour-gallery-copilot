// Task 1: Set up API and App Structure


import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  // useEffect hook runs when the component mounts

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

   // If an error occurred while fetching, show the error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // If data is successfully loaded, render the UI

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Tours</h2>
        <ul>
          {tours.map((tour) => (
            <li key={tour.id}>
              <h3>{tour.name}</h3>
              <p>{tour.info}</p>
              <p>Price: ${tour.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// Task 4: Conditional Rendering

// The Gallery component to display the tours
function Gallery({ tours }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <h3>{tour.name}</h3>
          <p>{tour.info}</p>
          <p>Price: ${tour.price}</p>
        </div>
      ))}
    </div>
  );
}

// If no tours are left, show a "Refresh" button to refetch the data
function NoTours({ onRefresh }) {
  return (
    <div className="no-tours">
      <h2>No Tours Left</h2>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}


// Task 5: Handle "Refresh Tours" Button

// Modify the App component to handle the "Refresh" functionality
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (tours.length === 0) {
    return <NoTours onRefresh={fetchTours} />;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Tours</h2>
        <ul>
          {tours.map((tour) => (
            <li key={tour.id}>
              <h3>{tour.name}</h3>
              <p>{tour.info}</p>
              <p>Price: ${tour.price}</p>
              <button onClick={() => setTours(tours.filter((t) => t.id !== tour.id))}>
                Not Interested
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
