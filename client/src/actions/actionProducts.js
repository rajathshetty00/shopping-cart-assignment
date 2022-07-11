import {createAsyncThunk} from "@reduxjs/toolkit";
import {updateLoadingState} from "../reducers/appReducer";
import {axiosGet, axiosPost} from "../utils/api/api";


export const getProductsAction = createAsyncThunk(
  'product/getProducts',
  async (_, {dispatch}) => {
    await dispatch(updateLoadingState(true))
    const response = await axiosGet({endpoint: "/products"})
    if(response){
      dispatch(updateLoadingState(false))
    }
    return response
  }
)

export const postAddtoCartAction = createAsyncThunk(
  'product/addToCart',
  async (payload) => {
    const response = await axiosPost({endpoint: "/addToCart", payload})
    return response
  }
)