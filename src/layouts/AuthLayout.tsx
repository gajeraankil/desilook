import { Box, Container, Grid, Typography } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const AuthLayout = () => {
  return (
    <Box component="section" className="bg-[#FEFEFE] py-10">
      <Container>
        <Grid container className="justify-center">
          <Grid item xs={12} md={6}>
            <Box className=" rounded-lg bg-[white] p-[25px] text-center shadow-[0_0_0_0.05rem_rgba(8,60,130,0.06),0_0_1.25rem_rgba(30,34,40,0.04)]">
              <Typography
                variant="h5"
                className="mb-[30px] text-lg font-bold text-[#343F52]"
              >
                Welcome To Desilook
              </Typography>
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
