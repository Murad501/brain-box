import { Container } from "@mui/material";
import Footer from "../footer";

const { default: Navbar } = require("../navbar");

function Layout({ children }) {
  return (
    <Container
      maxWidth={false}
      style={{ background: "#fff", minHeight: "100vh", padding: "0" }}
    >
      <Container maxWidth="xl" style={{ padding: "0" }}>
        <main>{children}</main>
      </Container>
    </Container>
  );
}

export default Layout;
