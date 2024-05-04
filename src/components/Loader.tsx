import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop open className="bg-[white]">
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
