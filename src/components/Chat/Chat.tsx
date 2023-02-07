import ChatStyled from "./ChatStyled"
import GlobalStyles from "../../styles/GlobalStyles"
import {
    Messages,
    Form,
    Settings,
} from "../../components"

const messages = [
    {
        id: 1,
        content: 'Hey Jane ! Are you here ?',
        user: 'John Doe',
    },
    {
        id: 2,
        content: 'Hi ! I do ',
        user: 'Jane Doe',
    },
    {
        id: 3,
        content: 'Have you plans for tonight ?',
        user: 'Jhon Doe',
    },
    {
        id: 4,
        content: 'Of course I do. I\'d like to have fun with you :) Let\'s learn React together ! ^^',
        user: 'Jane Doe',
    },
]

const Chat = () => (
    <ChatStyled>
        <GlobalStyles/>
        <Settings/>
        <Messages list={messages}/>
        <Form/>
    </ChatStyled>
)

export default Chat
