import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  LinkProps,
  Typography,
} from "@mui/material";
import { Suspense } from "react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const BreadcrumbLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "category");

  const LinkRouter = (props: LinkRouterProps) => {
    return <Link {...props} component={RouterLink as any} />;
  };

  return (
    <>
      <Box component="section" className="bg-[#02395A] py-10">
        <Container>
          <Breadcrumbs
            className="mb-2.5"
            aria-label="breadcrumb"
            separator={
              <Box className="text-sm font-medium leading-[1.7] text-[white]">
                /
              </Box>
            }
            sx={{ "& ol": { justifyContent: "center" } }}
          >
            <LinkRouter
              className="text-sm font-medium leading-[1.7] text-[white] no-underline"
              to="/"
            >
              Home
            </LinkRouter>
            {pathnames.map((pathname, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  className="text-sm font-medium capitalize leading-[1.7] text-[white]"
                  key={to}
                >
                  {pathname.replace(/(-|and)/g, function (match) {
                    return match === "-" ? " " : "&";
                  })}
                </Typography>
              ) : (
                <LinkRouter
                  className="text-sm font-medium capitalize leading-[1.7] text-[white] no-underline"
                  to={to}
                  key={to}
                >
                  {pathname.replace(/(-|and)/g, function (match) {
                    return match === "-" ? " " : "&";
                  })}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
          <Typography
            variant="h1"
            className="text-center text-3xl font-bold capitalize leading-tight tracking-[-0.2px] text-[white]"
          >
            {pathnames[pathnames.length - 1].replace(
              /(-|and)/g,
              function (match) {
                return match === "-" ? " " : "&";
              },
            )}
          </Typography>
        </Container>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default BreadcrumbLayout;
