import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import './css/UttarBox.css'

function UttarBox() {
  const user = useSelector(selectUser);
  return (
    <div className='uttarBox'>
        <div className='uttarBox_info'>
            <Avatar src={user?.photo}/>
        </div>
        <div className='uttarBox_uttar'>
            <p>What is you question or link?</p>
        </div>
    </div>
  )
}

export default UttarBox
