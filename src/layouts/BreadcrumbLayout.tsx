import {
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
      <section className="py-[40px] bg-[#F6F7F9]">
        <Container>
          <Breadcrumbs
            className="mb-[12px]"
            aria-label="breadcrumb"
            separator={
              <Typography className="text-[14px] text-[#64748B] font-semibold leading-5">
                /
              </Typography>
            }
            sx={{ "& ol": { justifyContent: "center" } }}
          >
            <LinkRouter
              className="text-[14px] text-[#64748B] font-semibold no-underline leading-5"
              to="/"
            >
              Home
            </LinkRouter>
            {pathnames.map((_, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  className=" text-[#64748B] font-semibold leading-5"
                  key={to}
                >
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter
                  className=" text-[#64748B] font-semibold no-underline leading-5"
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
            className="text-[30px] text-[#0F172A] text-center font-bold leading-9 -tracking-wide"
          >
            {breadcrumbNameMap[`/${pathnames[pathnames.length - 1]}`]}
          </Typography>
        </Container>
      </section>
      <Outlet />
    </>
  );
};

export default Breadcrumb;
