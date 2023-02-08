import {PropsWithChildren} from "react";

export interface MessageDetailsProps extends PropsWithChildren {
    id: number
    user: string
    content: string
    ownMessage: boolean
}

const MessageDetails = ({ user, content, ownMessage = false }: MessageDetailsProps) => {
    return (
        <div className="message">
            <div className="message-author">{user}</div>
            <div className="message-body">
                {content}
            </div>
        </div>
    );
}

export default MessageDetails
