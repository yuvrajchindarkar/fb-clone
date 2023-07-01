import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        {/* StoryReel */}
        <StoryReel />
        {/* MessageSender */}
        <MessageSender />

        <Post 
        profilePic="https://tse3.mm.bing.net/th?id=OIP.TekkxTamvcGRTglOBTYAvwHaHa&pid=Api&P=0&h=180"
        message="wow this works!"
        timestamp="this is Timestamp"
        username="kailas"
        image="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=mountains-nature-sky-459225.jpg&fm=jpg"
         />

        <Post/>
        
    </div>
  )
}

export default Feed