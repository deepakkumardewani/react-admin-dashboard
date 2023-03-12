import React from "react";
import ReactDOM from "react-dom/client";

import { registerLicense } from "@syncfusion/ej2-base";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
registerLicense(
  "@32302e342e30QI5eeK9hd7oCUZdsap5n5LAK7Xx0wh 6ap7UbNufHEE=;Mgo DSMBaFt/QHRqVVhkVFpHaV5KQmFJfFBmRGFTfVl6dlxWACFaRnZdQV1gSH9SdEdkW3ZWdndS;Mgo DSMBMAY9C3t2VVhkQlFacldJXnxIdkx0RWFab19yfldBal5YVBYiSV9jS31TdURiWH1cd3ZcTmZbVg==;Mgo DSMBPh8sVXJ0S0J XE9AflRBQmJBYVF2R2BJflx6dlJMYlVBJAtUQF1hSn5Qd0RiW31Zcn1dQGlb;@32302e342e30kx4DUsYbG9Rz/eaVZJha1QTxZqLyVfd9pPCS3nBcnIc=;NRAiBiAaIQQuGjN/V0Z WE9EaFtKVmBWf1tpR2NbfE5xdl9EZ1ZTTWY/P1ZhSXxQdkZiWH5ccnNXT2hbUkM=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIdkx0RWFab19yfldBal5YVBYiSV9jS31TdURiWH1cd3ZcTmdYVg==;@32302e342e30NgZmTYhL/9aRG5UyBDiheF4aDS7PSD 5FOA1jie0X54=;@32302e342e30PH5SBbKpH0pFhI9PJxxEYHbe/GnJ6uR5zaF5mSat 2A=;@32302e342e30IzKZNLAKtDkTq 25HM53sygo B1v /lFKAfHGYFn3jc=;@32302e342e30VCdB/JvGfYaMAKqotrk5KDTG2B3gThsWzG5o9Y1F5Y4=;@32302e342e30QI5eeK9hd7oCUZdsap5n5LAK7Xx0wh 6ap7UbNufHEE="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
