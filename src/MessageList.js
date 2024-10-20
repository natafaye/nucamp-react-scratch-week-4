import { useDispatch, useSelector } from "react-redux"
import { sendMessage } from "./messageSlice"

export default function MessageList() {
    const messages = useSelector(state => state.messages.messageList)

    // Always this:
    // useDispatch is a function that just returns the dispatch function
    const dispatch = useDispatch()

    const handleAddMessageClick = () => {
        // actually add the message please
        const newMessage = {
            id: 23,
            text: "I have a cute cat",
            author: "April",
            private: false
        }

        // dispatch an add message action with the payload set to newMessage
        dispatch(sendMessage(newMessage))
    }

    return (
        <div>
            {messages.map((message) => (
                <div>
                    {message.author}: {message.text}
                </div>
            ))}
            <button onClick={handleAddMessageClick}>Add Message</button>
        </div>
    )
}