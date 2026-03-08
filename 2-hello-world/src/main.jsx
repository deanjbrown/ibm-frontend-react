import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
function refresh() {
  root.render(<App />);
}

setInterval(refresh, 1000);
