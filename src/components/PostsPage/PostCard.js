import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import cardImage from "../../Assets/blogImages/blog3.png";
import Image from "next/image";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";

export default function PostCard() {
  return (
    <Card variant="outlined" elevation={0} sx={{ maxWidth: 800, mx: "auto", my: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          style={{
            //   objectFit: "cover",
            maxHeight: 400,
            width: "auto",
            overflow: "hidden",
          }}
          src={cardImage}
          alt=""
        ></Image>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ py: 3 }}
      >
        <Grid item xs={4}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AiOutlineHeart></AiOutlineHeart> Love 21
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AiOutlineComment></AiOutlineComment>Comment 13
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AiOutlineShareAlt></AiOutlineShareAlt> Share 2
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
