import React from 'react'
import './MessageSender.css';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function MessageSender() {
    const handleSubmit = (e) => {

    }
  return (
    <div className='messageSender'>
        <div className='messageSender_top'>
            <Avatar/>
            <form>
                <input type="text" className="messageSender_input" placeholder={'Whats on your mind, '} />
                <input  type="text" placeholder={'image url'} />
                <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
            </form>
        </div>

        <div className='messageSender_bottom'>
            <div className='messageSender_option'>
                <VideocamIcon style = {{ color: 'red'}} />
                <h3>Live Video</h3>
            </div>

            <div className='messageSender_option'>
                <PhotoLibraryIcon style = {{ color: 'green'}} />
                <h3>Photo/Video</h3>
            </div>

            <div className='messageSender_option'>
                <InsertEmoticonIcon style = {{ color: 'orange'}} />
                <h3>Feeling/Activity</h3>
            </div>
            
        </div>

    </div>
  )
}

export default MessageSender