import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { contactForm } from "../store/slices/contactSlice";
import { RootState } from "../store/store";

const Contact = () => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state: RootState) => state.auth);
  const { loading } = useAppSelector((state: RootState) => state.contact);

  const formSchema = z.object({
    name: z.string().min(1, "Name is required").trim(),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter valid Email")
      .trim(),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^[0-9]\d*$/, { message: "Enter valid Phone number" })
      .trim(),
    message: z.string().trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: (data?.first_name || "") + " " + (data?.last_name || ""),
      email: data?.email || "",
      phone: data?.phone || "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await dispatch(contactForm(values)).unwrap();

      if (response) {
        toast.success(response?.message);
        reset();
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  className="mb-[30px] w-full rounded-lg"
                  label="Name"
                  {...register("name")}
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                  InputProps={{ sx: { borderRadius: "8px" } }}
                  disabled={!!data?.first_name || !!data?.last_name}
                />
                <TextField
                  className="mb-[30px] w-full rounded-lg"
                  label="Email"
                  {...register("email")}
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                  InputProps={{ sx: { borderRadius: "8px" } }}
                  disabled={!!data?.email}
                />
                <TextField
                  className="mb-[30px] w-full rounded-lg"
                  label="Phone Number"
                  {...register("phone")}
                  error={!!errors?.phone}
                  helperText={errors?.phone?.message}
                  InputProps={{ sx: { borderRadius: "8px" } }}
                  disabled={!!data?.phone}
                />
                <TextField
                  className="mb-[30px] w-full rounded-lg"
                  label="Message"
                  multiline
                  rows={4}
                  {...register("message")}
                  error={!!errors?.message}
                  helperText={errors?.message?.message}
                  InputProps={{ sx: { borderRadius: "8px" } }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="w-full rounded-lg py-3.5 text-base font-medium normal-case leading-[1.7] tracking-[-0.2px] text-[white]"
                  disabled={loading}
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
