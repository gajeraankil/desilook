import { ArrowRight, LocationOn, Mail, Phone } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
    <Box component="footer" className="text-[white]">
      <Box className="bg-[#212529] py-[50px]">
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              className="mb-[30px] pe-[30px] lg:mb-0"
            >
              <Typography
                variant="h4"
                className="relative mb-[20px] pb-[4px] text-[19px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute bottom-[-4px] left-0 h-[1px] w-[40px] bg-[#737576]"
                ></Box>
                CONTACT US
                <Box
                  component="span"
                  className="absolute bottom-[-4px] left-0 h-[2px] w-[12px] rounded-[10px] bg-[white]"
                ></Box>
              </Typography>
              <List className="p-0 text-[14px] leading-[1.7]">
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="#"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <LocationOn className="me-[10px] text-[14px]" />
                    <Box component="span" className="font-light">
                      1053-54 Avadh Textile Market Opp. New Bombay Market surat
                      - 395010
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="mailto:desilooklifestyle.com@gmail.com"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <Mail className="me-[10px] text-[14px]" />
                    <Box component="span" className="font-light">
                      desilooklifestyle.com@gmail.com
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="tel:+917600129081"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <Phone className="me-[10px] text-[14px]" />
                    <Box component="span" className="font-light">
                      +91 76001 29081
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="tel:+917285863014"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <Phone className="me-[10px] text-[14px]" />
                    <Box component="span" className="font-light">
                      +91 72858 63014
                    </Box>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              className="mb-[30px] pe-[30px] lg:mb-0"
            >
              <Typography
                variant="h4"
                className="relative mb-[20px] pb-[4px] text-[19px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute bottom-[-4px] left-0 h-[1px] w-[40px] bg-[#737576]"
                ></Box>
                Categories
                <Box
                  component="span"
                  className="absolute bottom-[-4px] left-0 h-[2px] w-[12px] rounded-[10px] bg-[white]"
                ></Box>
              </Typography>
              <List className="p-0 text-[14px] leading-[1.7]">
                {categories?.map((category) => (
                  <ListItem className="px-0 pb-[6px] pt-0" key={category}>
                    <NavLink
                      to={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                    >
                      <ArrowRight className="me-[10px] text-[14px] text-primary" />
                      <Box component="span" className="font-light">
                        {category}
                      </Box>
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              className="mb-[30px] pe-[30px] lg:mb-0"
            >
              <Typography
                variant="h4"
                className="relative mb-[20px] pb-[4px] text-[19px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute bottom-[-4px] left-0 h-[1px] w-[40px] bg-[#737576]"
                ></Box>
                Infomation
                <Box
                  component="span"
                  className="absolute bottom-[-4px] left-0 h-[2px] w-[12px] rounded-[10px] bg-[white]"
                ></Box>
              </Typography>
              <List className="p-0 text-[14px] leading-[1.7]">
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/about"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      About Us
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/privacy-policy"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      Privacy Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/shipping-policy"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      Shipping Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/return-refund-policy"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      Return & Refund Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/terms-conditions"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      Terms & Conditions
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/faqs"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      FAQs
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-[6px] pt-0">
                  <NavLink
                    to="/contact"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-[10px] text-[14px] text-primary" />
                    <Box component="span" className="font-light">
                      Contact Us
                    </Box>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="bg-[#262B32] py-[20px]">
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
