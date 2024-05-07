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
    <Box className="bg-primary py-[10px]">
      <Container className="flex flex-col flex-wrap items-center justify-between gap-[12px] sm:flex-row">
        <Box className="flex flex-col flex-wrap items-center gap-[12px] text-[14px] sm:flex-row">
          <Link
            className="flex flex-wrap items-center text-[white] no-underline"
            to="tel:+917600129081"
          >
            <Phone className="me-[5px] text-[16px]" />
            <Box component="span">+917600129081</Box>
          </Link>
          <Link
            className="flex flex-wrap items-center text-[white] no-underline"
            to="mailto:desilooklifestyle.com@gmail.com"
          >
            <Mail className="me-[5px] text-[16px]" />
            desilooklifestyle.com@gmail.com
          </Link>
        </Box>
        <Box className="leading-none">
          <Link
            className="me-[12px] inline-block text-[white]"
            to="https://www.facebook.com/Desilooklifestyle"
            target="_blank"
          >
            <Facebook className="text-[16px]" />
          </Link>
          <Link
            className="me-[12px] inline-block text-[white]"
            to="https://www.instagram.com/desilook_lifestyle"
            target="_blank"
          >
            <Instagram className="text-[16px]" />
          </Link>
          <Link
            className="me-[12px] inline-block text-[white]"
            to="https://www.linkedin.com/in/desilook-lifestyle-919656188"
            target="_blank"
          >
            <LinkedIn className="text-[16px]" />
          </Link>
          <Link
            className="me-[12px] inline-block text-[white]"
            to="https://ie.pinterest.com/desilookl"
            target="_blank"
          >
            <Pinterest className="text-[16px]" />
          </Link>
          <Link
            className="inline-block text-[white]"
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
