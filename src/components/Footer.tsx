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
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={3} className="lg:mb-0">
              <Typography
                variant="h4"
                className="relative mb-5 pb-1 text-[19px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute -bottom-1 left-0 h-px w-10 bg-[#737576]"
                ></Box>
                CONTACT US
                <Box
                  component="span"
                  className="absolute -bottom-1 left-0 h-0.5 w-3 rounded-[10px] bg-[white]"
                ></Box>
              </Typography>
              <List className="p-0 text-sm leading-[1.7]">
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="#"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <LocationOn className="me-2.5 text-sm" />
                    <Box component="span" className="font-light">
                      1053-54 Avadh Textile Market Opp. New Bombay Market surat
                      - 395010
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="mailto:desilooklifestyle.com@gmail.com"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <Mail className="me-2.5 text-sm" />
                    <Box component="span" className="font-light">
                      desilooklifestyle.com@gmail.com
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="tel:+917600129081"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <Phone className="me-2.5 text-sm" />
                    <Box component="span" className="font-light">
                      +91 76001 29081
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="tel:+917285863014"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <Phone className="me-2.5 text-sm" />
                    <Box component="span" className="font-light">
                      +91 72858 63014
                    </Box>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="lg:mb-0">
              <Typography
                variant="h4"
                className="relative mb-5 pb-1 text-[19px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute -bottom-1 left-0 h-px w-10 bg-[#737576]"
                ></Box>
                Categories
                <Box
                  component="span"
                  className="absolute -bottom-1 left-0 h-0.5 w-3 rounded-[10px] bg-[white]"
                ></Box>
              </Typography>
              <List className="p-0 text-sm leading-[1.7]">
                {categories?.map((category) => (
                  <ListItem className="px-0 pb-1.5 pt-0" key={category}>
                    <NavLink
                      to={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                    >
                      <ArrowRight className="me-2.5 text-sm text-primary" />
                      <Box component="span" className="font-light">
                        {category}
                      </Box>
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="lg:mb-0">
              <Typography
                variant="h4"
                className="relative mb-5 pb-1 text-[19px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute -bottom-1 left-0 h-px w-10 bg-[#737576]"
                ></Box>
                Infomation
                <Box
                  component="span"
                  className="absolute -bottom-1 left-0 h-0.5 w-3 rounded-[10px] bg-[white]"
                ></Box>
              </Typography>
              <List className="p-0 text-sm leading-[1.7]">
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/about"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      About
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/privacy-policy"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      Privacy Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/shipping-policy"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      Shipping Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/return-and-refund-policy"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      Return & Refund Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/terms-and-conditions"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      Terms & Conditions
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/faqs"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      FAQs
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pb-1.5 pt-0">
                  <NavLink
                    to="/contact"
                    className="flex items-center text-[white] no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:opacity-[0.8]"
                  >
                    <ArrowRight className="me-2.5 text-sm text-primary" />
                    <Box component="span" className="font-light">
                      Contact
                    </Box>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}></Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="bg-[#262B32] py-5">
        <Container>
          <Typography className="text-sm font-medium leading-[1.7]">
            © Copyright {new Date().getFullYear()}. Desilook Lifestyle. All
            Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
