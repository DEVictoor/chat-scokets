import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef, typingStatus }) => {
  const navigate = useNavigate();
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Charla con tus amigos</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Salir del chat
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/* Se muestra cuendo un usuario esta tipeando */}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>

        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
