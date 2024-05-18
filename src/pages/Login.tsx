import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Login = () => {
  const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Enter valid Email"),
    password: z
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
      email: "",
      password: "",
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
          label="Email"
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <Box className="mb-[30px]">
          <TextField
            className="w-full"
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
          <Box className="text-right text-sm">
            <Link className="text-primary" to="/reset-password">
              Forgot password?
            </Link>
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          className="w-full py-3.5 normal-case text-[white]"
        >
          Login
        </Button>
      </form>
      <Box className="text-sm text-[#60697B]">
        Don't have an account?
        <Link className="ms-1 text-primary" to="/register">
          Register
        </Link>
      </Box>
    </>
  );
};

export default Login;
