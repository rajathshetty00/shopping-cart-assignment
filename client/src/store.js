import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer';
import homeReducer from './reducers/homeReducer';
import productReducer from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    product: productReducer,
    app: appReducer
  },
})