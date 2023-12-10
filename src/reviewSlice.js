import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reviewList: [
        {
            id: 7,
            text: "I'm a review"
        },
        {
            id: 3,
            text: "I'm a review too"
        }
    ]
}

let nextId = 1

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
        // Let's assume the action payload will be the review to add
        const newReview = {
            ...action.payload, // make a copy of the review
            id: nextId++ // just a little hack to get unique ids
        }
        state.reviewList.push(newReview) // change directly
    },
    deleteReview: (state, action) => {
        // Assume the payload is the id to delete
        // return a changed copy (of this area of the state)
        return {
            ...state, // to make sure we don't lose any other properties
            reviewList: state.reviewList.filter(review => review.id !== action.payload)
        }
    }
  }
});

export const { addReview, deleteReview } = reviewSlice.actions

export const reviewReducer = reviewSlice.reducer