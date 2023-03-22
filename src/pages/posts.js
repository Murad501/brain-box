import PostPageLayout from "@/components/Layout/PostPageLayout";
import AddPost from "@/components/PostsPage/AddPost";
import { PostCard } from "@/components/PostsPage/PostCard";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["researches"]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Posts() {
  const { data: allResearch = [], refetch, isLoading } = useQuery({
    queryKey: ["researches"],
    queryFn: () => fetch("/api/researches").then((res) => res.json()),
  });
  if(isLoading){
    return <Typography>Loading...</Typography>
  }
  return (
    <PostPageLayout>
      <Box>
        <AddPost refetch={refetch}></AddPost>
        {allResearch?.map((research) => (
          <PostCard
            key={research?._id}
            research={research}
            refetch={refetch}
          ></PostCard>
        ))}
      </Box>
    </PostPageLayout>
  );
}

Posts.getLayout = function getLayout(page) {
  return <PostPageLayout>{page}</PostPageLayout>;
};
export default Posts;
