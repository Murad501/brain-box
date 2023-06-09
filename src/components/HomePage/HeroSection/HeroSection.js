import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import heroImage from "../../../Assets/HeroImage2.jpg";

const theme = createTheme();

export default function HeroSection() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          px: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={false} md={6}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Share Research, Make a Difference
          </Typography>
          <Typography variant="h6">
            Are you passionate about your research? Share your research to make
            a difference in your field and beyond. Connect with others and
            contribute to advancements.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component={Paper} elevation={0} square>
          <Image src={heroImage} alt="" style={{width: '100%', height: 'auto'}} ></Image>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
