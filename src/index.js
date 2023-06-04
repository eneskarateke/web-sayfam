import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import logger from "redux-logger";
import { Provider } from "react-redux";

import { NightModeProvider } from "./NightModeContext";

const store = createStore(reducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NightModeProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </NightModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
