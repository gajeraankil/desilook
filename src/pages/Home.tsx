import {
  HeadsetMicOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
  Replay30Outlined,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Box component="section" className="bg-[#02395A] py-[25px]">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={3} className="text-center">
              <LocalShippingOutlined className="text-[40px] text-[white]" />
              <Box>
                <Typography
                  variant="h4"
                  className="text-lg font-medium leading-[1.7] text-[white]"
                >
                  Free Shipping
                </Typography>
                <Box
                  component="span"
                  className="text-xs font-medium leading-5 text-[#7997a9]"
                >
                  Free shipping on all orders in India
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="text-center">
              <HeadsetMicOutlined className="text-[40px] text-[white]" />
              <Box>
                <Typography
                  variant="h4"
                  className="text-lg font-medium leading-[1.7] text-[white]"
                >
                  Support 24/7
                </Typography>
                <Box
                  component="span"
                  className="text-xs font-medium leading-5 text-[#7997a9]"
                >
                  Contact us 24 hours a day, 7 days a week
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="text-center">
              <Replay30Outlined className="text-[40px] text-[white]" />
              <Box>
                <Typography
                  variant="h4"
                  className="text-lg font-medium leading-[1.7] text-[white]"
                >
                  30 Day Return
                </Typography>
                <Box
                  component="span"
                  className="text-xs font-medium leading-5 text-[#7997a9]"
                >
                  Simply return it within 30 days for an exchange.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="text-center">
              <PaymentOutlined className="text-[40px] text-[white]" />
              <Box>
                <Typography
                  variant="h4"
                  className="text-lg font-medium leading-[1.7] text-[white]"
                >
                  100% Secure Payment
                </Typography>
                <Box
                  component="span"
                  className="text-xs font-medium leading-5 text-[#7997a9]"
                >
                  We ensure secure payments with PEV
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
