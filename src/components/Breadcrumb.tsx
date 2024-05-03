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
      <div className="pt-[80px] pb-[40px]">
        <Container>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <div className="text-[14px] text-[#64748B] font-semibold leading-5">
                /
              </div>
            }
            sx={{ "& ol": { marginBottom: "12px" } }}
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
                  className="text-[14px] text-[#64748B] font-semibold leading-5"
                  color="text.primary"
                  key={to}
                >
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter
                  className="text-[14px] text-[#64748B] font-semibold no-underline leading-5"
                  to={to}
                  key={to}
                >
                  {breadcrumbNameMap[to]}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
          <h1 className="text-[30px] text-[#0F172A] font-extrabold leading-9 -tracking-wide m-0">
            {breadcrumbNameMap[`/${pathnames[pathnames.length - 1]}`]}
          </h1>
        </Container>
      </div>
      <Outlet />
    </>
  );
};

export default Breadcrumb;
