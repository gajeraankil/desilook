import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <Box component="section" className="bg-[#FEFEFE] py-10">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className=" rounded-lg bg-[white] p-[25px] shadow-[0_0_0_0.05rem_rgba(8,60,130,0.06),0_0_1.25rem_rgba(30,34,40,0.04)]">
              <Typography
                variant="h5"
                className="mb-[30px] text-center text-lg font-bold leading-normal tracking-[-0.2px] text-primary"
              >
                Get in touch with us
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  className="mb-[30px] w-full"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  className="mb-[30px] w-full"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  className="mb-[30px] w-full"
                  label="Phone Number"
                  variant="outlined"
                />
                <TextareaAutosize
                  className="mb-[30px] !h-28 w-full resize-none px-3.5 py-4"
                  placeholder="Message"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="w-full py-3.5 text-[white]"
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9737459332387!2d72.8477958753055!3d21.193201880497575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fcaf62fe239%3A0x9433d193d8da4608!2sDesilook%20Lifestyle%20-%20online%20seller%20near%20me%2C%20best%20kids%20wear%2Ckurti%20seller!5e0!3m2!1sen!2sin!4v1715783905614!5m2!1sen!2sin"
              className="h-full min-h-[450px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
