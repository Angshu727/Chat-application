import React, { use } from 'react'
import SingleConversation from './SingleConversation'
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from 'react-redux';

const Conversation = () => {
  useGetMessages();
  const {messages} = useSelector((store) => store.message);
  if(!messages) return;

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {
        messages.map((message)=>{
          return (
            <SingleConversation key={message._id} message={message}/>
          )
        })
      }
      
    </div>
  )
}

export default Conversation