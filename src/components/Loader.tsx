import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop open className="text-[#F97316] bg-transparent">
      <CircularProgress className="text-[inherit]" />
    </Backdrop>
  );
};

export default Loader;
