import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  LinkProps,
  Typography,
} from "@mui/material";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/about": "About",
  "/contact": "Contact",
  "/faqs": "FAQs",
  "/privacy-policy": "Privacy Policy",
  "/return-refund-policy": "Return & Refund Policy",
  "/shipping-policy": "Shipping Policy",
  "/terms-conditions": "Terms & Conditions",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const LinkRouter = (props: LinkRouterProps) => {
    return <Link {...props} component={RouterLink as any} />;
  };

  return (
    <>
      <Box component="section" className="bg-[#02395A] py-[40px]">
        <Container>
          <Breadcrumbs
            className="mb-[10px]"
            aria-label="breadcrumb"
            separator={
              <Box className="text-[14px] font-medium leading-[1.7] text-[white]">
                /
              </Box>
            }
            sx={{ "& ol": { justifyContent: "center" } }}
          >
            <LinkRouter
              className="text-[14px] font-medium leading-[1.7] text-[white] no-underline"
              to="/"
            >
              Home
            </LinkRouter>
            {pathnames.map((_, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  className="text-[14px] font-medium leading-[1.7] text-[white]"
                  key={to}
                >
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter
                  className="text-[14px] font-medium leading-[1.7] text-[white] no-underline"
                  to={to}
                  key={to}
                >
                  {breadcrumbNameMap[to]}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
          <Typography
            variant="h1"
            className="text-center text-[30px] font-bold leading-tight tracking-[-0.2px] text-[white]"
          >
            {breadcrumbNameMap[`/${pathnames[pathnames.length - 1]}`]}
          </Typography>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};

export default Breadcrumb;
