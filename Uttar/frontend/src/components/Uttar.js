import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Uttar.css'

function Uttar() {
  return (
    <div className = 'uttar'>
       <Header/>
       <div className='uttar_contents'>
        <div className='uttar_content'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
       </div>
    </div>
  )
}

export default Uttar
