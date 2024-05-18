import { Box, Container, Grid, Typography } from "@mui/material";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Loader from "../components/Loader";

const AuthLayout = () => {
  return (
    <Box component="section" className="bg-[#FEFEFE] py-10">
      <Container>
        <Grid container className="justify-center">
          <Grid item xs={12} md={6}>
            <Box className=" rounded-lg bg-[white] p-[25px] text-center shadow-[0_0_0_0.05rem_rgba(8,60,130,0.06),0_0_1.25rem_rgba(30,34,40,0.04)]">
              <Box className="mb-[30px] ">
                <Link to="/" className="inline-block">
                  <Box
                    className="block h-auto w-[50px]"
                    component="img"
                    alt="Desilook"
                    src={logo}
                  />
                </Link>
                <Typography
                  variant="h5"
                  className="text-lg font-bold text-[#343F52]"
                >
                  Welcome To Desilook
                </Typography>
              </Box>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AuthLayout;
