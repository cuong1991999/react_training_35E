import { configureStore } from "@reduxjs/toolkit";
import { Formredux } from "./reducer/BaiTapFormReducer";
export const store = configureStore({
  reducer: {
    Formredux: Formredux,
  },
});
