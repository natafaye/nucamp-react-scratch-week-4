import { createSlice } from '@reduxjs/toolkit'
import { TEST_MESSAGES } from './TEST_MESSAGES';

// const ultraState = {
//     messages: { // this slice name comes from the store
//         messageList: [
//             {
//                 id: 0,
//                 text: "How are you",
//                 author: "Natalie",
//                 private: false
//             },
//             {
//                 id: 1,
//                 text: "I'm not doing well",
//                 author: "Chad",
//                 private: true
//             },
//         ],
//         onPrivateMode: false
//     }
// }

//ultraState.messages.messageList

const messageSlice = createSlice({
    name: "messages",
    // mini state
    initialState: {
        messageList: TEST_MESSAGES, // starting out with test data for convenience
        onPrivateMode: false
    },
    reducers: {
        // Mini reducer
        sendMessage: (state, action) => {
            // either OPTION 1: Changes the state directly
            // or OPTION 2: Returns a changed copy of the state
            // Note: We make an assumption about what the action.payload will be

            // I'm going to assume that action.payload will be an object that's a new message
            // Note: state will be just this slice of the state (it will have the shape of hte initialState)

            // Option 1:
            state.messageList.push(action.payload)

            // Option 2:
            // return {
            //     ...state,
            //     messageList: [...state.messageList, action.payload]
            // }
        }
    }
});

// IMPORTANT: sendMessage right here is an Action Creator NOT a Mini Reducer
// sendMessage will create an action object that when dispatched goes to the sendMessage mini reducer above
export const { sendMessage } = messageSlice.actions
// Or I could do this: export const sendMessage = messageSlice.actions.sendMessage

// Export the mega reducer
export const messageReducer = messageSlice.reducer