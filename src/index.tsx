import React from "react";
import ReactDOM from "react-dom";
import "./tailwind-generated.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RootStore, { stores } from "./stores/root-store";

ReactDOM.render(
  <RootStore.Provider value={stores}>
    <App />
  </RootStore.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
