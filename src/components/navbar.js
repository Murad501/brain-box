import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import logoOne from "../Assets/logoDark.png";
import logoTwo from "../Assets/logoWhite.png";

const pages = ["Products"];
const settings = ["Profile", "Account", "Dashboard"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const { data } = useSession();
  const user = data?.user;
  console.log(user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      elevation={0}
      position="sticky"
      style={{
        background: "#fff",
        color: "black",
        borderBottom: "1px solid #CFCFCF",
      }}
    >
      <Container
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
        maxWidth="xl"
      >
        <Toolbar
          style={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Image src={logoOne} alt="logo" height={80}></Image>

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            {" "}
            {user && (
              <div>
                <TextField
                  sx={{ display: { xs: "none", md: "block" } }}
                  size="small"
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                />
              </div>
            )}
            {user && (
              <List sx={{ display: { xs: "none", md: "flex", gap: "10px" } }}>
                {pages.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
            {!user && (
              <>
                <Button
                sx={{px: 3}}
                  style={{
                    display: isSignIn ? "none" : "block",
                    backgroundColor: "#2C3333",
                    color: "#FFFFFF",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSignIn(true);
                    signIn();
                  }}
                >
                  Sign In
                </Button>
                <Button
                  style={{ display: isSignIn ? "block" : "none" }}
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSignIn(false);
                    // signIn();
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
            {user && (
              <Button
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </Button>
            )}
            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user?.image} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  {/* <MenuItem>
                  <Button variant="contained" href="#contained-buttons">
                    Sign Up
                  </Button>
                </MenuItem> */}
                </Menu>
              </Box>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
