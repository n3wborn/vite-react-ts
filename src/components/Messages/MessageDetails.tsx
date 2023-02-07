import { MessageProps } from "./Messages";

export type MessageDetailProps = {
    msg: MessageProps
}

const MessageDetails = ({ msg }: MessageDetailProps) => {
    return (
        <div className="message">
            <div className="message-author">{msg.user}</div>
            <div className="message-body">
                {msg.content}
            </div>
        </div>
    );
}

export default MessageDetails
