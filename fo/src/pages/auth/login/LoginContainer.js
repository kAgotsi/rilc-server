import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  Container,
  Link,
  Box,
  Button,
  Checkbox,
  InputLabel,
  FormGroup,
  FormControlLabel,
  IconButton,
  OutlinedInput,
  FormControl,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import * as Yup from "yup";
import { Formik } from "formik";
import AuthLayout from "../../../components/AuthLayout";
import { FORGOTPASSWORD } from "../../../navigation/CONSTANT";
import login from "../../../services/AuthService";

//styles

//Login component
export function LoginContainer() {
  const [rootValues, setRootValues] = React.useState({
    showPassword: true,
  });

  // ======= Password function ===========/
  const handleClickShowPassword = () => {
    setRootValues({
      showPassword: !rootValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //=================== end ===============/

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const initialValues = {
    email: "example@rilc.com",
    password: "motdepasse",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("L'adresse mail doit être valide")
      .max(50)
      .required("L'adresse mail est obligatoire"),
    password: Yup.string().max(50).required("Le mot de passe est obligatoire"),
  });

  function onSubmit(values, { setSubmitting }) {
    /*alert(JSON.stringify(values, null, 2));*/
    const payload = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(payload.email, payload.password));
  }

  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3, ml: 10 }}>
                  <Typography color="textPrimary" variant="h3" textAlign="left">
                    Connexion
                  </Typography>
                </Box>
                <Grid container spacing={3}></Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 4,
                  }}
                ></Box>
                <Box
                  sx={{
                    ml: 10,
                  }}
                >
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />

                  <FormControl
                    sx={{ mt: 3 }}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && errors.password)}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={rootValues.showPassword ? "text" : "password"}
                      value={values.password}
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {rootValues.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    <FormHelperText id="component-error-text">
                      {touched.password && errors.password}
                    </FormHelperText>
                  </FormControl>
                  <Box
                    sx={{
                      display: "grid",
                      columnGap: 2,
                      rowGap: 1,
                      mt: 3,
                      gridTemplateColumns: "repeat(2, 0.5fr)",
                    }}
                  >
                    <Box>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Se souvenir de moi"
                        />
                      </FormGroup>
                    </Box>
                    <Box sx={{ mt: 1, textAlign: "right" }}>
                      <Link component={RouterLink} to={FORGOTPASSWORD}>
                        Mot de passe oublié?
                      </Link>
                    </Box>
                  </Box>
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Se connecter
                    </Button>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </AuthLayout>
  );
}
