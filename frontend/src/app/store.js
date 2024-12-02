import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import quoteReducer from '../features/quoteSlice';
import policyReducer from '../features/policySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quote: quoteReducer,
    policy: policyReducer,
  },
});
