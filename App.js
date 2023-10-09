import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Enquiry from "./components/Enquiry";
import EnquiryList from "./components/EnquiryList";
import ProductUpload from "./components/ProductUpload";
import About from "./components/About";
import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Review from "./components/Review";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", mb: 10 }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["About", "Product", "Enquiry", "Enquiry List"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Routes>
          <Route path="/" element={<Enquiry />} />
          <Route path="/enquirylist" element={<EnquiryList />} />
          <Route path="/product" element={<ProductUpload />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Box>
    </React.Fragment>
  );
}

export default App;
