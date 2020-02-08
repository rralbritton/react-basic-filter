import React from 'react';
import './App.css';
import SimpleFilter from "./SimpleFilter";

function App() {
  return (
    <div className="App">
      <h4>Filter Example</h4>
      <p>
        Start typing in a value from the list below to see the filtered search
    in action </p>
      <SimpleFilter />
    </div>
  );
}

export default App;
