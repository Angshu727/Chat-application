import React from "react";

const SingleConversation = (message) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble">{message?.message}</div>
      <div className="chat-footer opacity-50">Seen</div>
    </div>
  );
};

export default SingleConversation;
