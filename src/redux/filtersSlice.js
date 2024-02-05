import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { inputValue: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setContactsFilter(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;