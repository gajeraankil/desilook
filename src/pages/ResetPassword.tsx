import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const ResetPassword = () => {
  const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Enter valid Email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
          InputProps={{ sx: { borderRadius: "8px" } }}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-full rounded-lg py-3.5 text-base font-medium normal-case leading-[1.7] tracking-[-0.2px] text-[white]"
        >
          Reset
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

export default ResetPassword;
