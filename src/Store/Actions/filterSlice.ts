/* import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  categoryId: number;
  sort: {
    name: string;
    sort: string;
  };
}

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    name: "исполнителю",
    sort: "Author",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
 */