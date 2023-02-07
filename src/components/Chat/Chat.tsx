import ChatStyled from "./ChatStyled"
import GlobalStyles from "../../styles/GlobalStyles"
import {
    Messages,
    Form,
    Settings,
} from "../../components"


const Chat = () => (
    <ChatStyled>
        <GlobalStyles/>
        <Settings/>
        <Messages/>
        <Form/>
    </ChatStyled>
)

export default Chat
