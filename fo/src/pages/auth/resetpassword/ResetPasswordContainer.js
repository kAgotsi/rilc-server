import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Container,
  Link,
  Box,
  Button,
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import AuthLayout from "../../../components/AuthLayout";
import { LOGIN } from "../../../navigation/CONSTANT";

//Reset password component
export function ResetPasswordContainer() {
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
            initialValues={{
              password: "motdepasse",
              confirmPassword: "motdepasse",
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .min(8, "Le mot de passe doit comporter plus de 8 caractères !")
                .max(50)
                .required("Le mot de passe est obligatoire!"),
              confirmPassword: Yup.string()
                .min(8, "Le mot de passe doit comporter plus de 8 caractères !")
                .max(50)
                .oneOf(
                  [Yup.ref("password"), null],
                  "Vous devez saisir un même mot de passe"
                )
                .required("Le mot de passe est obligatoire!"),
            })}
            onSubmit={() => {}}
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
                <Box
                  sx={{
                    pb: 1,
                    pt: 4,
                    ml: 10,
                  }}
                >
                  <Typography
                    color="textPrimary"
                    variant="body1"
                    color="textSecondary"
                    textAlign="left"
                  >
                    Entrez votre nouveau mot de passe. Il doit comporter au
                    moins une lettre majuscule, minuscule, un chifffre, un
                    charactère et un caractère spécial
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body1"
                    color="textSecondary"
                    textAlign="left"
                  >
                    ex: Bonjour@2021
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
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Mot de passe"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    fullWidth
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    label="Confirmation du mot de passe"
                    margin="normal"
                    name="confirmPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.confirmPassword}
                    variant="outlined"
                  />

                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Réinitialiser mot de passe
                    </Button>
                  </Box>
                  <Box sx={{ py: 1, textAlign: "center" }}>
                    <Link component={RouterLink} to={LOGIN}>
                      Retour
                    </Link>
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
