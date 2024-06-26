import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUser } from "../store/slices/authSlice";
import { RootState } from "../store/store";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading } = useAppSelector((state: RootState) => state.auth);

  const formSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter valid Email")
      .trim(),
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await dispatch(loginUser(values)).unwrap();

      if (response) {
        toast.success(response?.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
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
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <Box className="mb-[30px]">
          <TextField
            className="w-full"
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            InputProps={{ sx: { borderRadius: "8px" } }}
          />
          <Box className="text-right text-sm">
            <Link className="font-medium text-primary" to="/reset-password">
              Forgot password?
            </Link>
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          className="w-full rounded-lg py-3.5 text-base font-medium normal-case leading-[1.7] tracking-[-0.2px] text-[white]"
          disabled={loading}
        >
          Login
        </Button>
      </form>
      <Box className="text-sm text-[#60697B]">
        Don't have an account?
        <Link className="ms-1 font-medium text-primary" to="/register">
          Register
        </Link>
      </Box>
    </>
  );
};

export default Login;
