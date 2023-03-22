import PostPageLayout from "@/components/Layout/PostPageLayout";
import AddPost from "@/components/PostsPage/AddPost";
import { PostCard } from "@/components/PostsPage/PostCard";
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
  // const response = await fetch('http://localhost:3000/api/researches')
  // const allResearch = await response.json()

  // return{
  //   props: {
  //     allResearch
  //   }
  // }
}

function Posts() {
  const { data: allResearch = [], refetch } = useQuery({
    queryKey: ["researches"],
    queryFn: () => fetch("/api/researches").then((res) => res.json()),
  });
  console.log(allResearch);
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
