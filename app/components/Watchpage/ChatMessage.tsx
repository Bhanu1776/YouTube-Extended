import React from 'react';

interface ChatMessageProps {
  profileImageUrl: string;
  displayName: string;
  displayMessage: string;
}

const ChatMessage = ({
  profileImageUrl,
  displayName,
  displayMessage,
}: ChatMessageProps) => (
  <div className="my-3 flex items-center gap-4">
    <img src={profileImageUrl} className="h-8 w-8 rounded-full " alt="logo" />
    <h1 className="font-bold">{displayName}</h1>
    <p className="truncate">{displayMessage}</p>
  </div>
);

export default ChatMessage;
