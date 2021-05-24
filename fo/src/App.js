import React from "react";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
// MUI Theme
import "./App.css";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
