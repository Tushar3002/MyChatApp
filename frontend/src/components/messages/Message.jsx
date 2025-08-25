import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img alt='Image' src={"https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"} />
        </div>
      </div>
      <div className={`chat-bubble bg-blue-500 text-white`}>
        Hello, this is a message
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>3:33</div>
    </div>
  )
}

export default Message
