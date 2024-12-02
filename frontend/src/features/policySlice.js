import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';

// Purchase Policy
export const purchasePolicy = createAsyncThunk(
  'policy/purchase',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/quotes/purchase', formData);
      return data.policy;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Fetch All Policies
export const fetchPolicies = createAsyncThunk(
  'policy/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/policies'); // Endpoint for fetching policies
      return data.policies;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const policySlice = createSlice({
  name: 'policy',
  initialState: { policies: [], policy: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(purchasePolicy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(purchasePolicy.fulfilled, (state, action) => {
        state.loading = false;
        state.policy = action.payload;
      })
      .addCase(purchasePolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPolicies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPolicies.fulfilled, (state, action) => {
        state.loading = false;
        state.policies = action.payload;
      })
      .addCase(fetchPolicies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default policySlice.reducer;
