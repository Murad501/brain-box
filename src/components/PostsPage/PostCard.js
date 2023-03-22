import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
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
import { format, parseISO } from "date-fns";
import { Button, Textarea } from "@mui/joy";
import { useSession } from "next-auth/react";
import CommentCard from "./CommentCard";

export function PostCard({ research, refetch }) {
  const date = research?.postTime;
  const modifiedDate = format(parseISO(date), "dd/MM/yyyy");
  const { data } = useSession();
  const user = data?.user;

  async function handleAddLike(id) {
    console.log(id);
    const email = user.email;
    let love;
    if (research.actions.love.includes(email)) {
      love = research.actions.love.filter((lv) => lv !== email);
    } else {
      love = [...research.actions?.love, user.email];
    }
    fetch(`/api/researches/like-update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ love }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
      });
  }

  async function handleAddComment(e) {
    e.preventDefault();
    if (!e.target.comment.value) {
      return;
    }
    const id = research._id;
    const currentComment = {
      postId: research._id,
      commentText: e.target.comment.value,
      author: {
        name: user.name,
        image: user.image,
        email: user.email,
      },
      commentTime: new Date(),
      like: [],
    };

    const comment = [...research.actions.comment, currentComment];
    console.log(comment);

    fetch(`/api/researches/comment-update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        e.target.reset();
        refetch();
      });
  }

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{ maxWidth: 800, mx: "auto", my: 2 }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={research.author?.image}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={research.author?.name}
        subheader={modifiedDate}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {research?.postText}
        </Typography>
        <Box sx={{ mt: 2, display: "flex",justifyContent:'center', gap: 1 }}>
          {research?.tags.map((tag, idx) => (
            <Button key={idx} size="sm" variant="soft">
              {tag}
            </Button>
          ))}
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          width={1000}
          height={1000}
          style={{ width: "auto", height: 400 }}
          src={research.imgUrl}
          alt=""
        ></Image>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ py: 3 }}>
        <Grid sx={{ cursor: "pointer" }} item xs={4}>
          <Typography
            onClick={() => handleAddLike(research?._id)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              color: research?.actions?.love?.includes(user?.email)
                ? "#42a5f5"
                : "",
            }}
          >
            <AiOutlineHeart></AiOutlineHeart>{" "}
            {research?.actions?.love?.includes(user?.email) ? "Loved" : "Love"}{" "}
            {research?.actions?.love?.length}
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
            <AiOutlineComment></AiOutlineComment>Comment{" "}
            {research?.actions?.comment?.length}
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
            <AiOutlineShareAlt></AiOutlineShareAlt> Share{" "}
            {research?.actions?.share}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mx: 8, my: 2 }}>
        <form onSubmit={handleAddComment}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1}
          >
            <Grid item xs={10} sx={{ mx: "auto" }}>
              <Textarea
                name="comment"
                variant="outlined"
                minRows={1}
                placeholder={`Add a Comment...`}
                // sx={{width: '100%'}}
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button type="submit" size="md" variant="outlined">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box sx={{ mx: 8, my: 2, borderTop: '1px solid #E9E9E9' }}>
        {research.actions.comment.map((comment, idx) => (
          <CommentCard key={idx} comment={comment}></CommentCard>
        ))}
      </Box>
    </Card>
  );
}
