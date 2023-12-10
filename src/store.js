import { configureStore } from '@reduxjs/toolkit'
import { bookReducer } from './bookSlice'
import { reviewReducer } from './reviewSlice'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    reviews: reviewReducer
  },
})