import { createSlice } from "@reduxjs/toolkit";
import { customerApi } from "../../fakeApi/apiCustomer";
import { dispatch } from "../store";

export interface CustomerState {
  customer: Customer[];
}
export interface Customer {
  id?: number;
  name?: string;
  status?: boolean;
  create_at?: string;
  update_at?: string;
}

const initialState: CustomerState = {
  customer: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    getAllListSuccess(state, action: any) {
      state.customer = action.payload;
    },
  },
});
export default customerSlice.reducer;
export function getAllList() {
  return async () => {
    const resp = await customerApi.success.data;
    console.log(resp);

    dispatch(customerSlice.actions.getAllListSuccess(resp));
  };
}
