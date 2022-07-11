import {createAsyncThunk} from "@reduxjs/toolkit";
import {updateLoadingState} from "../reducers/appReducer";
import {axiosGet} from "../utils/api/api";

export const getBannersAction = createAsyncThunk(
    'home/getBanners',
    async (_, {dispatch}) => {
      await dispatch(updateLoadingState(true))
      const response = await axiosGet({endpoint: "/banners"})
      if(response){
        dispatch(updateLoadingState(false))
      }
      return response
    }
  )



  export const getCategoriesAction = createAsyncThunk(
    'home/getCategories',
    async (_, {dispatch}) => {
      await dispatch(updateLoadingState(true))
      const response = await axiosGet({endpoint: "/categories"})
      if(response){
        dispatch(updateLoadingState(false))
      }
      return response
    }
  )




  