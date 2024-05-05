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
      <Box component="section" className="py-[40px] bg-[#02395A]">
        <Container>
          <Breadcrumbs
            className="mb-[10px]"
            aria-label="breadcrumb"
            separator={
              <Box className="text-[14px] text-[white] font-medium leading-[1.7]">
                /
              </Box>
            }
            sx={{ "& ol": { justifyContent: "center" } }}
          >
            <LinkRouter
              className="text-[14px] text-[white] font-medium no-underline leading-[1.7]"
              to="/"
            >
              Home
            </LinkRouter>
            {pathnames.map((_, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  className="text-[14px] text-[white] font-medium leading-[1.7]"
                  key={to}
                >
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter
                  className="text-[14px] text-[white] font-medium no-underline leading-[1.7]"
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
            className="text-[30px] text-[white] text-center font-bold leading-tight tracking-[-0.2px]"
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
