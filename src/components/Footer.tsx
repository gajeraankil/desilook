import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" className="text-[white]">
      <Box className="py-[50px] bg-[#212529]">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} lg={3}></Grid>
            <Grid item xs={12} sm={6} lg={3}></Grid>
            <Grid item xs={12} sm={6} lg={3}></Grid>
            <Grid item xs={12} sm={6} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="py-[20px] bg-[#262B32]">
        <Container>
          <Typography className="text-[14px] font-medium leading-[1.7]">
            © Copyright {new Date().getFullYear()}. Desilook Lifestyle. All
            Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
