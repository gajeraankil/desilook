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
  return (
    <Box component="footer" className="text-[white]">
      <Box className="py-[50px] bg-[#212529]">
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              className="pe-[30px] mb-[30px] lg:mb-0"
            >
              <Typography
                variant="h4"
                className="relative text-[19px] pb-[4px] mb-[20px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute left-0 bottom-[-4px] w-[40px] h-[1px] bg-[#737576]"
                ></Box>
                CONTACT US
                <Box
                  component="span"
                  className="absolute left-0 bottom-[-4px] w-[12px] h-[2px] bg-[white] rounded-[10px]"
                ></Box>
              </Typography>
              <List className="p-0 text-[14px] leading-[1.7]">
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <LocationOn className="text-[14px] me-[10px]" />
                    <Box component="span" className="font-light">
                      1053-54 Avadh Textile Market Opp. New Bombay Market surat
                      - 395010
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="mailto:desilooklifestyle.com@gmail.com"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <Mail className="text-[14px] me-[10px]" />
                    <Box component="span" className="font-light">
                      desilooklifestyle.com@gmail.com
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="tel:+917600129081"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <Phone className="text-[14px] me-[10px]" />
                    <Box component="span" className="font-light">
                      +91 76001 29081
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="tel:+917285863014"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <Phone className="text-[14px] me-[10px]" />
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
              className="pe-[30px] mb-[30px] lg:mb-0"
            >
              <Typography
                variant="h4"
                className="relative text-[19px] pb-[4px] mb-[20px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute left-0 bottom-[-4px] w-[40px] h-[1px] bg-[#737576]"
                ></Box>
                Categories
                <Box
                  component="span"
                  className="absolute left-0 bottom-[-4px] w-[12px] h-[2px] bg-[white] rounded-[10px]"
                ></Box>
              </Typography>
              <List className="p-0 text-[14px] leading-[1.7]">
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Lehenga Choli
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Saree
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Kurti
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Salwar Suit
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Gown
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Dupatta
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to=""
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Potali Bags
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
              className="pe-[30px] mb-[30px] lg:mb-0"
            >
              <Typography
                variant="h4"
                className="relative text-[19px] pb-[4px] mb-[20px] font-medium leading-[1.45] tracking-[-0.2px]"
              >
                <Box
                  component="span"
                  className="absolute left-0 bottom-[-4px] w-[40px] h-[1px] bg-[#737576]"
                ></Box>
                Infomation
                <Box
                  component="span"
                  className="absolute left-0 bottom-[-4px] w-[12px] h-[2px] bg-[white] rounded-[10px]"
                ></Box>
              </Typography>
              <List className="p-0 text-[14px] leading-[1.7]">
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/about"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      About Us
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/privacy-policy"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Privacy Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/shipping-policy"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Shipping Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/return-refund-policy"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Return & Refund Policy
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/terms-conditions"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      Terms & Conditions
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/faqs"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
                    <Box component="span" className="font-light">
                      FAQs
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem className="px-0 pt-0 pb-[6px]">
                  <NavLink
                    to="/contact"
                    className="flex items-center text-[white] no-underline hover:opacity-[0.8] transition-all duration-[0.2s] ease-[ease-in-out]"
                  >
                    <ArrowRight className="text-[14px] text-primary me-[10px]" />
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
