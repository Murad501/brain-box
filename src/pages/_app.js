import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ session, Component, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
