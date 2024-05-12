import {
  HeadsetMicOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
  Replay30Outlined,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  const categories = [
    "Lehenga Choli",
    "Saree",
    "Kurti",
    "Salwar Suit",
    "Gown",
    "Dupatta",
    "Potali Bags",
  ];

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
      <Box component="section" className="bg-[#F5F5F5] py-[50px]">
        <Container className="text-center tracking-[-0.2px]">
          <Typography
            variant="h3"
            className="mb-[50px] text-4xl font-bold leading-[1.3] text-[#343f52]"
          >
            Categories
          </Typography>
          <Grid container spacing={4}>
            {categories?.map((category) => (
              <Grid
                className="min-h-[168px]"
                item
                xs={6}
                sm={4}
                lg={2}
                key={category}
              >
                <Link
                  to={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
                  className="flex h-full items-center justify-center rounded-lg bg-[linear-gradient(145deg,#e2e8ec,#ffffff)] p-[30px] text-[#02395a] no-underline shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#fff]"
                >
                  <Typography variant="h5" className="text-base font-bold">
                    {category}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
