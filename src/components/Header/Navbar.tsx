import {
  FavoriteBorderOutlined,
  Menu,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const categories = [
    "Lehenga Choli",
    "Saree",
    "Kurti",
    "Salwar Suit",
    "Gown",
    "Dupatta",
    "Potali Bags",
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = categories?.map((category) => (
    <ListItem
      key={category}
      sx={{
        width: "auto",
        padding: {
          xs: "8px 16px",
          md: 0,
        },
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.7,
        letterSpacing: -0.5,
      }}
    >
      <ListItemButton sx={{ padding: 0 }} tabIndex={-1}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#F97316" : "black",
              textDecoration: "none",
              padding: "8px 16px",
              width: "100%",
            };
          }}
          to={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
        >
          {category}
        </NavLink>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <>
      <AppBar className="static bg-[#F5F5F5] py-2.5">
        <Container className="flex flex-wrap items-center justify-between">
          <Box className="flex flex-wrap items-center">
            <IconButton
              className="me-4 block h-10 md:hidden"
              onClick={toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
            <Link to="/">
              <Box
                className="block h-auto w-[50px]"
                component="img"
                alt="Desilook"
                src={logo}
              />
            </Link>
          </Box>
          <List className="hidden flex-wrap md:flex">{DrawerList}</List>
          <Box>
            <Button
              className="normal-case text-[black]"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <IconButton className="me-3" onClick={() => navigate("/wishlist")}>
              <Badge
                variant="dot"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#F97316",
                  },
                }}
              >
                <FavoriteBorderOutlined />
              </Badge>
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <Badge
                variant="dot"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#F97316",
                  },
                }}
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ minWidth: 250 }} onClick={toggleDrawer(false)}>
          <List>{DrawerList}</List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
