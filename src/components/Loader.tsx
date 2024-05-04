import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop open className="bg-transparent">
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
