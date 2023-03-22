import { Grid, Typography } from "@mui/material";
import Footer from "../footer";
import Navbar from "../navbar";

const PostPageLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <Typography>Left Side</Typography>
        </Grid>
        <Grid item md={8}>
          <main>{children}</main>
        </Grid>
        <Grid item md={2}>
          <Typography>Right Side</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PostPageLayout;
