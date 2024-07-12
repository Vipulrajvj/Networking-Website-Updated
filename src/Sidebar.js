import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import Back from "./images/photoholgic-wZTiKB6rQYY-unsplash.jpg" 
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
// give classname to components early so that they can be used in the css files


//Step 14create a recentItem , pass Topic through it and then print after recetnt

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) =>(
        <div className="sidebar_recentitem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
           <div className="sidebar_top">
                <img src={Back} alt="" className="name" /> 
                <Avatar className = "sidebar_avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
           </div>

           <div className="sibebar_stats">
  

            <div className="sidebar_bottom">
                <p>Languages used and Features</p>
                {recentItem('HTML')}
                {recentItem('CSS')}
                {recentItem('ReactJS')}
                {recentItem('Redux')}
                {recentItem('Firebase')}



            </div>
           </div>

        </div>
    )
}

export default Sidebar
