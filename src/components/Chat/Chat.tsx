import ChatStyled from "./ChatStyled"
import GlobalStyles from "../../styles/GlobalStyles"
import {
    Form,
} from "../../containers";

import {
    Messages,
    Settings,
} from "../../components"

const Chat = () => (
    <ChatStyled>
        <GlobalStyles/>
        <Settings/>
        <Messages list={[]}/>
        <Form/>
    </ChatStyled>
)

export default Chat
