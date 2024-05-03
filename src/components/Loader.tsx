import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop open className="bg-transparent">
      <CircularProgress className="text-[#F97316]" />
    </Backdrop>
  );
};

export default Loader;
