import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";

export default function CommentCard({ comment }) {
  console.log(comment);
  return (
    <Card variant="outlined" sx={{ my: 1, px: 2, pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",

          gap: 2,
        }}
      >
        <Avatar
          src={comment?.author?.image}
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
        ></Avatar>
        <Box>
          <Typography>{comment?.author?.name}</Typography>

          <Typography variant="body2" sx={{ my: 1 }} color="text.secondary">
            {comment?.commentText}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
