import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box className="py-10 text-center">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
