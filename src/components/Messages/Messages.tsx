import React from "react";
import {MessageDetails} from "../index";
import MessagesStyled from "./MessagesStyled";

export type MessageProps = {
    id: number,
    user: string,
    content: string,
}

type MessagesProps = {
    list: Array<MessageProps>,
    children?: React.ReactNode
}

const Messages = ({list}: MessagesProps) => (
    <MessagesStyled>
        {list.map((message) => (
            <MessageDetails key={message.id} msg={message}/>
        ))}
    </MessagesStyled>
)

export default Messages
