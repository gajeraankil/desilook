import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface RegisterUserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface LoginUserData {
  email: string;
  password: string;
}

interface AuthState {
  loading: boolean;
  data: any;
}

const initialState: AuthState = {
  loading: false,
  data: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterUserData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      throw rejectWithValue((error as AxiosError)?.response?.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginUserData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      throw rejectWithValue((error as AxiosError)?.response?.data);
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload?.data;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload?.data;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
