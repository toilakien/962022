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
export async function getAllList() {
  const resp = await customerApi.success.data;
  try {
    if (resp) {
      dispatch(customerSlice.actions.getAllListSuccess(resp));
    }
  } catch (error) {
    console.log(error);
  }
}
