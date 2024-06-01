import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { registerUser } from "../store/slices/authSlice";
import { RootState } from "../store/store";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading } = useAppSelector((state: RootState) => state.auth);

  const formSchema = z
    .object({
      first_name: z.string().min(1, "First Name is required").trim(),
      last_name: z.string().min(1, "Last Name is required").trim(),
      phone: z
        .string()
        .min(1, "Phone number is required")
        .regex(/^[0-9]\d*$/, { message: "Enter valid Phone number" })
        .trim(),
      email: z
        .string()
        .min(1, "Email is required")
        .email("Enter valid Email")
        .trim(),
      password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirm_password: z.string().min(1, "Confirm Password is required"),
    })
    .refine(({ password, confirm_password }) => password === confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
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
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { first_name, last_name, phone, email, password } = values;

    try {
      const response = await dispatch(
        registerUser({ first_name, last_name, phone, email, password }),
      ).unwrap();

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
          label="First Name"
          {...register("first_name")}
          error={!!errors?.first_name}
          helperText={errors?.first_name?.message}
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Last Name"
          {...register("last_name")}
          error={!!errors?.last_name}
          helperText={errors?.last_name?.message}
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <TextField
          className="mb-[30px] w-full rounded-lg"
          label="Phone Number"
          {...register("phone")}
          error={!!errors?.phone}
          helperText={errors?.phone?.message}
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Email"
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors?.password}
          helperText={errors?.password?.message}
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <TextField
          className="mb-[30px] w-full"
          label="Confirm Password"
          type="password"
          {...register("confirm_password")}
          error={!!errors?.confirm_password}
          helperText={errors?.confirm_password?.message}
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-full rounded-lg py-3.5 text-base font-medium normal-case leading-[1.7] tracking-[-0.2px] text-[white]"
          disabled={loading}
        >
          Create Account
        </Button>
      </form>
      <Box className="text-sm text-[#60697B]">
        Already have an account?
        <Link className="ms-1 font-medium text-primary" to="/login">
          Login
        </Link>
      </Box>
    </>
  );
};

export default Register;
