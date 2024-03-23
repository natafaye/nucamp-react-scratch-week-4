import { createSlice } from "@reduxjs/toolkit";
import { TEST_MESSAGES } from "./TEST_MESSAGES"
import { v4 as uuid } from 'uuid'

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messageList: TEST_MESSAGES
    },
    reducers: {
        // The only way to get data to a reducer is through the action payload
        // Assume it will be in the payload, make sure later that it is put in the payload
        addMessage: (state, action) => { // state will have the shape of initialState
            const newMessage = {
                id: uuid(), // generates a new unique UUID
                ...action.payload // assuming payload is an object with new message data
            }
            state.messageList.push(newMessage)
        }
    }
})

// messageSlice = { reducer: function, actions: { addMessage: function } }

// We're going to import the reducer in the store
export const messageReducer = messageSlice.reducer

// We're going to import the action creators in our components
export const { addMessage } = messageSlice.actions
// This is the same as the line above, but without object destructuring
// export const addMessage = messageSlice.actions.addMessage


// Selector
export const selectAllMessages = state => state.messages.messageList

// Selector creator
export const selectMessageById = idToSelectBy => state => state.messages.messageList.find(message => message.id === idToSelectBy)
// Same thing as above line, but as a normal function
// export const createSelectById = function (idToSelectBy) {
//     return state => state.messages.messageList.find(message => message.id === idToSelectBy)
// }