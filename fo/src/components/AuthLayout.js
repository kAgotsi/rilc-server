import React from "react";
import PropTypes from "prop-types";
import { makeStyles, CssBaseline, Grid, Box } from "@material-ui/core";
import logo from "../assets/images/logo.svg";

//styles
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    background: "#294BB9",
    height: "100vh",
    top: "0px",
  },
  fieldContainer: {
    background: "white",
    height: "100vh",
    top: "0px",
  },
  logo: {
    width: "10%",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "60%",
    },
  },
}));

//Login component
export default function AuthLayout({ children }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Grid container xs={5} item className={classes.logoContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" className={classes.logo} />
        </Box>
      </Grid>
      <Grid
        container
        alignItems="center"
        item
        xs={7}
        className={classes.fieldContainer}
      >
        {children}
      </Grid>
    </Grid>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
};
