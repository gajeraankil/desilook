import { AppBar, Box, Container } from "@mui/material";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar className="static py-[10px] bg-[#F5F5F5]">
        <Container className="flex flex-wrap justify-between items-center">
          <Link to="/">
            <Box
              className="w-[50px] h-auto"
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
