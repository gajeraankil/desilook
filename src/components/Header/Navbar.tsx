import { AppBar, Box, Container } from "@mui/material";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar className="static bg-[#F5F5F5] py-[10px]">
        <Container className="flex flex-wrap items-center justify-between">
          <Link to="/">
            <Box
              className="block h-auto w-[50px]"
              component="img"
              alt="Desilook"
              src={logo}
            />
          </Link>
          <Box></Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
