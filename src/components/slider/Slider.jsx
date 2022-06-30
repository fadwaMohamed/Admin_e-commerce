import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AppRouter from "../../AppRouter";
import styles from "./Slider.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import MenuIcon from "@mui/icons-material/Menu";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import AdminPanelSettingsSharpIcon from "@mui/icons-material/AdminPanelSettingsSharp";

import { ActiveContext } from "../contexts/HeaderContext";
import { getCartCount } from "../../DB/dbCart";
import { cartContext } from "../contexts/CartCountContext";

const drawerWidth = 240;

const Slider = (props) => {
  const headerCtx = useContext(ActiveContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const cartCtx = useContext(cartContext);

  useEffect(() => {
    getCartCount().then((data) => cartCtx.setCount(data));
  }, []);

  const drawer = (
    <div>
      <Toolbar className={styles.logo}>
        <AdminPanelSettingsSharpIcon className={styles.icon} />
        Admin
      </Toolbar>
      <List>
        {["Home", "Cart", "Checkout", "Bill", "Users"].map((text, index) => (
          <NavLink
            key={text}
            to={"/" + text}
            className={(isActive) =>
              isActive.isActive ? styles.activeLink : ""
            }
          >
            <ListItem disablePadding>
              <ListItemButton className={styles.link}>
                <ListItemIcon style={{ color: "inherit" }}>
                  {index === 0 && <HomeSharpIcon />}
                  {index === 1 && (
                    <Badge color="secondary" badgeContent={cartCtx.count}>
                      <ShoppingCartSharpIcon />
                    </Badge>
                  )}
                  {index === 2 && <InventorySharpIcon />}
                  {index === 3 && <AttachMoneySharpIcon />}
                  {index === 4 && <PeopleAltSharpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={styles.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {headerCtx.activeHeader}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
        className={styles.slideContent}
      >
        <Toolbar />
        {/* ////////////////////// Routes ////////////////////// */}
        <AppRouter />
      </Box>
    </Box>
  );
};

export default Slider;
