import React from "react";
import ReactDOM from "react-dom/client";

import { registerLicense } from "@syncfusion/ej2-base";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhkQlFac1xJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZhX35fdH1UQWdfUUQ="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
