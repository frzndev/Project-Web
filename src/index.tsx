import React from "react";
import ReactDOM from "react-dom";

import { Routes } from "./routes";
import { AuthProvider } from "./contexts/auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
