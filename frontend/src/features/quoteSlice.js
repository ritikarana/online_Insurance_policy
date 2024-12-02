import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';

// Generate a Quote
export const generateQuote = createAsyncThunk(
  'quote/generate',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/quotes/generate', formData);
      return data.quote;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const quoteSlice = createSlice({
  name: 'quote',
  initialState: { quote: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(generateQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;
