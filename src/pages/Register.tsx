import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Register = () => {
  const formSchema = z.object({
    first_name: z.string().min(1, "First Name is required"),
    last_name: z.string().min(1, "Last Name is required"),
    email: z.string().min(1, "Email is required").email("Enter valid Email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm_password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-[30px]">
        <TextField
          className="mb-[30px] w-full"
          label="First Name"
          {...register("first_name")}
          error={!!errors?.first_name}
          helperText={errors?.first_name?.message}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Last Name"
          {...register("last_name")}
          error={!!errors?.last_name}
          helperText={errors?.last_name?.message}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Email"
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Confirm Password"
          type="password"
          {...register("confirm_password")}
          error={!!errors?.confirm_password}
          helperText={errors?.confirm_password?.message}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-full py-3.5 normal-case text-[white]"
        >
          Create Account
        </Button>
      </form>
      <Box className="text-sm text-[#60697B]">
        Already have an account?
        <Link className="ms-1 text-primary" to="/login">
          Login
        </Link>
      </Box>
    </>
  );
};

export default Register;
