import { configureStore } from '@reduxjs/toolkit'
import { messageReducer } from './messageSlice'

export const store = configureStore({
  // ULTRA REDUCER
  reducer: {
    // the property name will be the property name for the slice of the state
    messages: messageReducer, // mega reducer comes together to form ultra reducer
  },
})