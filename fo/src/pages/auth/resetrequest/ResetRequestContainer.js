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

//Reset password request component
export function ResetRequestContainer() {
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
          <Formik initialValues={{}} onSubmit={() => {}}>
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
                    Requête envoyée avec succès
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    ml: 10,
                    pt: 2,
                  }}
                >
                  <Typography
                    align="left"
                    color="textSecondary"
                    variant="body1"
                  >
                    Un mail de confirmation a été envoyé à email@email.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    ml: 10,
                  }}
                >
                  <Typography
                    align="left"
                    color="textSecondary"
                    variant="body1"
                  >
                    Vérifiez votre mail s'il vous plaît.
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
                  <Box sx={{ py: 3 }}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Retour
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
