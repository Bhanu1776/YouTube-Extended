/* eslint-disable prettier/prettier */

'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import useFetchVideosData from '@/Hooks/useFetchVideosData';
import { YOUTUBE_API_URL } from '@/utils/constants';
import ChatMessage from '@components/Watchpage/ChatMessage';
import { VideoDataType } from '@/Types/VideoDataTypes';
import { ChatMessageTypes, Item as ItemTypes } from '@Types/ChatMessageTypes';

const Livechat = () => {
  const [activeLiveChatId, setActiveLiveChatId] = useState<string>('');
  const [messages, setMessages] = useState<ItemTypes[]>([]);
  const searchParams = useSearchParams();
  const VideoID = searchParams.get('v');

  //* Video Data API call
  const VideoDataAPI = `${YOUTUBE_API_URL}/videos?part=liveStreamingDetails,snippet&id=${VideoID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY}`;

  const onSuccess = (VideoData: VideoDataType) => {
    const LiveChatID =
      VideoData?.items[0]?.liveStreamingDetails?.activeLiveChatId;
    setActiveLiveChatId(LiveChatID);
  };

  useFetchVideosData('Specific Video Data', VideoDataAPI, true, onSuccess); // ? First API call to get videoDetails(if live video get ActiveLiveChatId)

  //---------------------------------------------------------------------------------------------------------------------------

  //* Live chat messages API call
  const LiveChatAPIData = `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${activeLiveChatId}&part=snippet,authorDetails&maxResults=25&key=${process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY}`;

  const Success = (ChatMessages: ChatMessageTypes) => {
    const Items = ChatMessages.items;
    setMessages(Items);
  };
  const { isError } = useFetchVideosData(
    'Fetching Live chat',
    LiveChatAPIData,
    !!activeLiveChatId, // ? Dependent API call
    Success,
  );

  //* Error handling
  if (!activeLiveChatId) return null;
  if (isError) return null;

  return (
    <figure className="m-7 flex max-h-[32rem] w-96 max-w-sm flex-col rounded-2xl border border-zinc-700 pt-2">
      <div className="max-h-[32rem] overflow-y-scroll px-4">
        {messages.map((message: ItemTypes) => {
          const displayName = message?.authorDetails?.displayName;
          const profileImageUrl = message?.authorDetails?.profileImageUrl;
          const displayMessage = message?.snippet?.displayMessage;

          return (
            <ChatMessage
              key={profileImageUrl}
              profileImageUrl={profileImageUrl}
              displayName={displayName}
              displayMessage={displayMessage}
            />
          );
        })}
      </div>
      <div className="flex gap-4 rounded-2xl rounded-t-xl bg-zinc-800 p-4">
        <img
          src="https://avatars.githubusercontent.com/u/53951343?v=4"
          className="h-8 w-8 rounded-full "
          alt="logo"
        />
        <div className="w-full flex-col">
          <h1>Bhanu Sunka</h1>
          <input
            type="text"
            name="ChatMessage"
            id="ChatMessage"
            placeholder="chat .."
            className="mt-1 w-full border-b-2 border-zinc-500 bg-zinc-800 focus:border-b-pink-600 focus:outline-none"
          />
          <div className="flex flex-row-reverse">
            <button
              type="button"
              className="m-2 mt-3 rounded-lg border border-zinc-600 px-4 py-[0.35rem] hover:bg-pink-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Livechat;
