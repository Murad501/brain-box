import Layout from "@/components/Layout/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import PostPageLayout from "@/components/Layout/PostPageLayout";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ session, Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  // const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  let layout;
  if (Component.layout === "posts") {
    layout = (
      <PostPageLayout>
        <Component {...pageProps} />
      </PostPageLayout>
    );
  } else {
    layout = (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Navbar />
          <main>{layout}</main>
          <Footer />
          <Toaster />
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
