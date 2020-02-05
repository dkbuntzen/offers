import React from "react";
import { render } from "react-dom";
import App from "./src/App";

function renderApp() {
  render(<App />, root);
}

renderApp();

module.hot.accept();
