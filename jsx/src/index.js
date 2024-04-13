// 1) Import the React and ReactDom libraries

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to div with ID root.

const el = document.getElementById("root");

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component.

function App() {
  return <h1>Hi there!</h1>;
}

// 5) Show the component on the screen.

root.render(<App />);