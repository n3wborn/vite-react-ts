import {MessageDetails} from "../index";
import MessagesStyled from "./MessagesStyled";

const Messages = ({list}) => (
    <MessagesStyled>
        {list.map((message) => (
            <MessageDetails key={message.id} msg={message}/>
        ))}
    </MessagesStyled>
)

export default Messages
