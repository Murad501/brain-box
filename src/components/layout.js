import { Container } from "@mui/material";

const { default: Navbar } = require("./navbar");

function Layout({ children }) {
  return (
    <Container  maxWidth={false} style={{ background: '#fff' , minHeight: '100vh', padding: '0'}}>
      <Container maxWidth="xl" style={{paddingLeft: '5px', paddingRight: '5px'}}>
        <Navbar />
        <main style={{paddingLeft: '10px', paddingRight: '10px'}}>{children}</main>
      </Container>
    </Container>
  );
}

export default Layout;
