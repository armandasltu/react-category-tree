import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "slices/categoriesSlice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;