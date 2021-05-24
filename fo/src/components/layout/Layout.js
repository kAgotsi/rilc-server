import React from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../styles/Theme";
import "../../App.css";

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <ThemeProvider theme={theme}>
            <div className="App">
              <div className="root">
                <Component {...matchProps} />
              </div>
            </div>
          </ThemeProvider>
        </div>
      )}
    />
  );
};
export default Layout;
