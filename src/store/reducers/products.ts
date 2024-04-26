import { createReducer } from "@reduxjs/toolkit";
import { captureText, calculateTotal } from "../actions/products";

const initialState = { text: "", total: 0 };

const productsReducer = createReducer(initialState, (build) =>
  build
    .addCase(captureText, (state, action) => {
      const newState = {
        ...state,
        text: action.payload.text,
      };
      return newState;
    })
    .addCase(calculateTotal, (state, action) => {
      const subtotals = action.payload.products.map((each) => each.price * each.units);
      const total = subtotals.reduce((acc: number, val: number) => acc + val);
      const newState = {
        ...state,
        total,
      };
      return newState;
    })
);

export default productsReducer;
