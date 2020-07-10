import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { setCategories } from "slices/categoriesSlice";
import { generateCategories } from "mocks/categories";

const store = configureStore({
    reducer: rootReducer,
});

store.dispatch(setCategories(generateCategories()));

export default store;