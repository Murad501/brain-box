import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import blog1 from "../../../Assets/blogImages/blog1.png";
import blog2 from "../../../Assets/blogImages/blog2.jpg";
import blog3 from "../../../Assets/blogImages/blog3.png";
import Image from "next/image";
import { Person } from "@mui/icons-material";

export default function LatestBlogs() {
  return (
    <div style={{ marginBottom: "50px", padding: "0 5px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 5 }}>
        Latest Blogs
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card variant="outlined" sx={{ maxWidth: 500, padding: 1 }}>
            <Image
              src={blog1}
              alt=""
              style={{
                objectFit: "cover",
                maxHeight: 300,
                width: "100%",
                overflow: "hidden",
              }}
            ></Image>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
                margin: "10px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ mr: 1 }}>
                  <Person></Person>
                </IconButton>
                <Typography>Md Murad Hossain</Typography>
              </div>
              <div>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card variant="outlined" sx={{ maxWidth: 500, padding: 1 }}>
            <Image
              src={blog2}
              alt=""
              style={{
                objectFit: "cover",
                maxHeight: 300,
                width: "100%",
                overflow: "hidden",
              }}
            ></Image>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
                margin: "10px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ mr: 1 }}>
                  <Person></Person>
                </IconButton>
                <Typography>Md Murad Hossain</Typography>
              </div>
              <div>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card variant="outlined" sx={{ maxWidth: 500, padding: 1 }}>
            <Image
              src={blog3}
              alt=""
              style={{
                objectFit: "cover",
                maxHeight: 300,
                width: "100%",
                overflow: "hidden",
              }}
            ></Image>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
                margin: "10px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ mr: 1 }}>
                  <Person></Person>
                </IconButton>
                <Typography>Md Murad Hossain</Typography>
              </div>
              <div>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
