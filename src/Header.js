//step 4 use rfce extension to get the default function header , download the extension feom vs code 

import React from 'react'


// Step 5 import css file for the header here 
//Step 6 get in settings on how to integrate emmet in javascript   
//Step 7 to import images use import name of the file then the address of the file, then use {img1} wherever u need to use it   

//Step 8 create reusable components such as headeroptions and make a new javascript file for it 

import img1 from './images/Verna.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WifiIcon from '@material-ui/icons/Wifi';
import avatar1 from './images/1617176833823.jpg';
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';
import { auth } from './firebase';



function Header() {
    
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (



        <div className = "header">
            <div className="header_left">
            <img src={img1} alt=""/> 
            <div className="header_search">
            <SearchIcon/>
            <input placeholder="search" type="text" name="" id="" />
            </div>   
            
            
            </div>
            <div className="header_right">

            {/* Using the jsx element here */}
            {/* Adding parameters to the HEaderoption.js */}


            <HeaderOption Icon = {HomeIcon} title = 'Home'/>
            <HeaderOption Icon = {WifiIcon} title = 'Network'/>
            <HeaderOption Icon = {BusinessCenterIcon} title = 'Jobs'/>
            <HeaderOption Icon = {ChatIcon} title = 'Messaging'/>
            <HeaderOption Icon = {NotificationsIcon} title = 'Notification'/>
            <HeaderOption avatar = {avatar1} title= 'Me' onClick ={logoutOfApp}/>



            </div>
            
            


        </div>
    )
}

export default Header
