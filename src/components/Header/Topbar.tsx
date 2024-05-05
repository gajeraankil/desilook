import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <Box className="py-[10px] bg-primary">
      <Container className="flex flex-wrap flex-col sm:flex-row justify-between items-center gap-[12px]">
        <Box className="flex flex-wrap flex-col sm:flex-row items-center text-[14px] gap-[12px]">
          <Link
            className="flex flex-wrap items-center text-[white] no-underline"
            to="tel:+917600129081"
          >
            <Phone className="text-[16px] me-[5px]" />
            <Box component="span">+917600129081</Box>
          </Link>
          <Link
            className="flex flex-wrap items-center text-[white] no-underline"
            to="mailto:desilooklifestyle.com@gmail.com"
          >
            <Mail className="text-[16px] me-[5px]" />
            desilooklifestyle.com@gmail.com
          </Link>
        </Box>
        <Box className="leading-none">
          <Link
            className="text-[white] me-[12px]"
            to="https://www.facebook.com/Desilooklifestyle"
            target="_blank"
          >
            <Facebook className="text-[16px]" />
          </Link>
          <Link
            className="text-[white] me-[12px]"
            to="https://www.instagram.com/desilook_lifestyle"
            target="_blank"
          >
            <Instagram className="text-[16px]" />
          </Link>
          <Link
            className="text-[white] me-[12px]"
            to="https://www.linkedin.com/in/desilook-lifestyle-919656188"
            target="_blank"
          >
            <LinkedIn className="text-[16px]" />
          </Link>
          <Link
            className="text-[white] me-[12px]"
            to="https://ie.pinterest.com/desilookl"
            target="_blank"
          >
            <Pinterest className="text-[16px]" />
          </Link>
          <Link
            className="text-[white]"
            to="https://www.youtube.com/channel/UCdreHtKI9FObpNGPx71kxsg"
            target="_blank"
          >
            <YouTube className="text-[16px]" />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
