import { Container } from "@mui/material";

const { default: Navbar } = require("./navbar");

function Layout({ children }) {
  return (
    <Container minHeight='100vh' maxWidth={false} style={{ background: '#fff' , minHeight: '100vh', padding: '0'}}>
      <Container maxWidth="xl" style={{paddingLeft: '5px', paddingRight: '5px'}}>
        <Navbar />
        <main>{children}</main>
      </Container>
    </Container>
  );
}

export default Layout;
