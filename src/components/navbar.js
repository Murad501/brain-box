import {
  AppBar,
  Avatar,
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
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import logoOne from "../Assets/logoDark.png";
import logoTwo from "../Assets/logoWhite.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      style={{ background: "#fff", color: "black" }}
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

          <div style={{display: "flex", gap: '10px', alignItems: 'center', marginRight: '8px'}}>
            <List sx={{ display: { xs: "none", md: "flex", gap: "10px" } }}>
              {pages.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/332902300_6067613799990055_7532404620724800054_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFex6Cf3ASRV5eTBRDelWbIC7YC30svc9ALtgLfSy9z0KpaMG0D1D6tUHRi8_wgp5EqQc4pLGEdrri9VWMP8iK3&_nc_ohc=gunI0tvdyLIAX9K5OwN&_nc_ht=scontent.fdac27-2.fna&oh=00_AfCjidLjse3WzH-uAZLPIxtYezcTkByRTXeS0XuaeO22MQ&oe=6411E016"
                  />
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
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
