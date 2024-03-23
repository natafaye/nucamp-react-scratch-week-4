import { useSelector } from "react-redux"
import { selectAllMessages, selectMessageById } from "./messageSlice"

export default function MessageList() {
    const messageList = useSelector( selectAllMessages )
    // Same as doing this:
    // const messageList = useSelector( state => state.messages.messageList )

    // Using a selector creator
    const messageWithIdOf0 = useSelector( selectMessageById(0) )
    // Same as doing this:
    // const messageWithIdOf0 = useSelector( state => state.messages.messageList.find(message => message.id === 0) )

    return (
        <div>
            {messageList.map(message => (
                <div key={message.id}>
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    )
}