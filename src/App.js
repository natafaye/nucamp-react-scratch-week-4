import Sidebar from "./Sidebar"
import MessageForm from "./MessageForm"
import MessageList from "./MessageList"

export default function App() {
    return (
        <div className="main-container">
            <Sidebar />
            <div className="main">
                <MessageList/>
                <MessageForm/>
            </div>
        </div>
    )
}