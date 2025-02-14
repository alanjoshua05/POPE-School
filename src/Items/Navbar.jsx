import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  AppBar,
  Stack,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Nav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);
  const Navigate = useNavigate();

  return (
    <AppBar
      sx={{
        background: "white",
        backdropFilter: "blur(10px)",
      }}
      position="sticky"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} className="flex gap-2">
          <Link to="/">
          <img style={{ width: "65px" }} src={logo} alt="logo" /></Link>
          <Typography
            variant="h4"
            color="black"
            sx={{ fontWeight: "900", display: { lg: "flex", xs: "none" } }}
            mt={1.6}
          >
            POPE
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
          mr={0}
        >
          <ul
            style={{ marginLeft: "auto", marginTop: "0px" }}
            className="flex gap-1"
          >
            <li className="text-black hover-underline cursor-pointer">
              <Button onClick={() => Navigate("/")} variant="light">
                <Typography variant="body1" color="initial">
                  Home
                </Typography>
              </Button>
            </li>
            <li className="text-black hover-underline cursor-pointer">
              <Button onClick={() => Navigate("/diocese")} variant="light">
                <Typography variant="body1" color="initial">
                Diocese
                </Typography>
              </Button>
            </li>
            <li>
              <Dropdown backdrop="">
                <DropdownTrigger>
                  <Button variant="light">
                    <Typography variant="body1" color="initial">
                      About Us
                    </Typography>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                  <DropdownItem key="new">
                    <Link to="/about">
                      <Typography variant="body2" color="initial">
                        School
                      </Typography>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="copy">
                    <Link to="/founder">
                      <Typography variant="body2" color="initial">
                        Founder
                      </Typography>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="copy">
                    <Link to="/vision">
                      <Typography variant="body2" color="initial">
                        Vision and Mission
                      </Typography>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="text-black hover-underline cursor-pointer">
              <Button onClick={() => Navigate("/achievement")} variant="light">
                <Typography variant="body1" color="initial">
                  Achievements
                </Typography>
              </Button>
            </li>
            <li>
              <Dropdown backdrop="">
                <DropdownTrigger>
                  <Button variant="light">
                    <Typography variant="body1" color="initial">
                      Academics
                    </Typography>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                  <DropdownItem key="home">
                    <Link to="/academics">
                      <Typography variant="body2" color="initial">
                        Curriculum
                      </Typography>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="about">
                    <Link to="/rules">
                      <Typography variant="body2" color="initial">
                        Rules & Regulations
                      </Typography>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown backdrop="">
                <DropdownTrigger>
                  <Button variant="light">
                    <Typography variant="body1" color="initial">
                      School
                    </Typography>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                  <DropdownItem key="home">
                    <Link to="/activities">
                      <Typography variant="body2" color="initial">
                        Extra Curicular Activities
                      </Typography>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="about">
                    <Link to="/infrastructure">
                      <Typography variant="body2" color="initial">
                        Infrastructure
                      </Typography>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="about">
                    <Link to="/gallery">
                      <Typography variant="body2" color="initial">
                        School Gallery
                      </Typography>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>

            <li className="text-black hover-underline cursor-pointer">
              <Button variant="light">
                <Link to="/staff">
                  <Typography variant="body1" color="initial">
                    Staffs
                  </Typography>
                </Link>
              </Button>
            </li>

            <li className="text-black hover-underline cursor-pointer">
              <Button onClick={() => Navigate("/contact")} variant="light">
                <Typography variant="body1" color="initial">
                  Contact Us
                </Typography>
              </Button>
            </li>
          </ul>
        </Stack>

        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>

        <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/diocese">
                <ListItemText primary="Diocese" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/about">
                <ListItemText primary="School" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/founder">
                <ListItemText primary="Founder" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/vision">
                <ListItemText primary="Vision & Mission" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/achievement">
                <ListItemText primary="Achievements" />
              </Link>
            </ListItem>

            <ListItem button onClick={handleDrawerClose}>
              <Link to="/activities">
                <ListItemText primary="Activities" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/academics">
                <ListItemText primary="Curriculum" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/rules">
                <ListItemText primary="Rules & Regulations" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/infrastructure">
                <ListItemText primary="Infrastructure" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/gallery">
                <ListItemText primary="Gallery" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/staff">
                <ListItemText primary="Staffs" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/contact">
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
