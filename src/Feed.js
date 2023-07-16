import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Feed.css'
function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContaier'>
      
       <div className='feed__input'>
       <CreateIcon/>
       <form>
         <input type='text'/>
         <butotm type='submit'>Send</butotm>
       </form>
       </div>

       <div className='feed__inputOption'>
       
       <InputOption Icon={ImageIcon} color='#70B5F9' title='Photo'/>
       <InputOption Icon={SubscriptionsIcon} color='#E7A33E' title='Video'/>
       <InputOption Icon={EventNoteIcon} color='#C0CBCD' title='Event'/>
       <InputOption Icon={CalendarMonthIcon} color='#7FC15E' title='Write article'/>



       </div>
      </div>
    </div>
  )
}

export default Feed
