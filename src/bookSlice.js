import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookList: []
}

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {}
});

export const {} = bookSlice.actions

export const bookReducer = bookSlice.reducer