const MessageDetails = ({ msg }) => {
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
