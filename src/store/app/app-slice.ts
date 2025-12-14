import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceType } from '../../types/state';

const initialState: AppSliceType = {
  error: null,
};

export const appSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setError } = appSlice.actions;
export const appReducer = appSlice.reducer;
