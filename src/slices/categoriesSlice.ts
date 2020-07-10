import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "types";

interface UsersState {
  categories: Category[];
}

const initialState: UsersState = {
  categories: [],
};

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(
      state: UsersState,
      { payload: categories }: PayloadAction<Category[]>
    ) {
      state.categories = categories;
    },
    addCategory(state: UsersState, { payload: category }: PayloadAction<Category>) {
      state.categories.push(category);
    },
  },
});

export const { setCategories, addCategory } = slice.actions;

export default slice.reducer;
