import {MessageDetails} from "../index";
import MessagesStyled from "./MessagesStyled";
import {PropsWithChildren} from "react";
import {MessageDetailsProps} from "./MessageDetails";

interface MessagesProps extends PropsWithChildren {
    list: MessageDetailsProps[]
}

const Messages = ({list}: MessagesProps) => (
    <MessagesStyled>
        {list.map((message) => (
            <MessageDetails key={message.id} msg={message}/>
        ))}
    </MessagesStyled>
)

export default Messages
