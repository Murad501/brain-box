const { Grid, Typography } = require("@mui/material");
const { Box } = require("@mui/system");
import { Copyright } from "@mui/icons-material";
import Image from "next/image";
import logoOne from "../Assets/logoDark.png";

function Footer() {
  return (
    <Box sx={{ p: 4, borderTop: '1px solid #deeaee' }}>
      <Grid container justifyContent='space-between' alignItems={'center'} spacing={2}>
        <Grid >
          <Image src={logoOne} alt="logo" height={80}></Image>
        </Grid>
        <Grid >
          <Typography sx={{display:'flex', alignItems:'center'}}>
            <Copyright></Copyright> 2023 Brain Box. All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer
