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

//Forgot password component
export function ForgotPasswordContainer() {
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
              email: "example@rilc.com",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("L'adresse mail doit être valide")
                .max(50)
                .required("L'adresse mail est obligatoire"),
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
                    Mot de passe oublié?
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    ml: 10,
                    pb: 1,
                    pt: 2,
                  }}
                >
                  <Typography
                    align="left"
                    color="textSecondary"
                    variant="body1"
                  >
                    Entrez votre adresse mail pour recevoir un lien pour
                    réinitialiser votre mot de passe
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
                  <Box sx={{ py: 3 }}>
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
