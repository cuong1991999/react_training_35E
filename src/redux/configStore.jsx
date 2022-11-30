import { configureStore } from "@reduxjs/toolkit";
import { BugerReducer } from "./reducer/BaiTapBugerReducer";

import { Formredux } from "./reducer/BaiTapFormReducer";
export const store = configureStore({
  reducer: {
    Formredux: Formredux,
    BugerReducer: BugerReducer,
  },
});
