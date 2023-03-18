import AddPost from "@/components/PostsPage/AddPost";
import { Box } from "@mui/system";

const { default: PostCard } = require("@/components/PostsPage/PostCard");

function Posts() {
  return (
    <Box>
      <AddPost></AddPost>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </Box>
  );
}

export default Posts;
