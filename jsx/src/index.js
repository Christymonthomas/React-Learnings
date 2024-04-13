// 1) Import the React and ReactDom libraries

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

// 2) Get a reference to div with ID root.

const el = document.getElementById("root");

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component. --> This is done in App.js and the created component is exporetd to index.js

// 5) Show the component on the screen.

root.render(<App />);
