import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ContactState {
  loading: boolean;
}

const initialState: ContactState = {
  loading: false,
};

export const contactForm = createAsyncThunk(
  "contact/form",
  async (data: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/contact/form`,
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

export const contactSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(contactForm.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(contactForm.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(contactForm.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default contactSlice.reducer;
