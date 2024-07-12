import React, {useState} from 'react'
import {useEffect} from 'react'
import FlipMove from 'react-flip-move';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import Post from './Post';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewIcon from '@material-ui/icons/Assignment';
import {db} from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

//Step24 Using react flip move which can be found on github to provide animations in the project so wheneve rsomoen enters a new post an animation takses plcae
//WE use a forward ref to implement the same 
//Step 15 we use form because when we enter something there should be something that we get
//Step 20 create userfeeds
//useeffect loads whenever we boot up the website 

function Feed() {
    //We need to import useState from react for this to function
    //usestate is a hook , here the input state is nothing at the start, and we use setinput to change those values inthe program
    const user = useSelector(selectUser)
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc =>  (
            {
                id: doc.id,
                data: doc.data(), //If any data is input it will go ahead and change it
            }
        )))  
       )) //Snapshot gives the reawl time listener value from the databse from firebase

    }, [])  //using blank dependenecy

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description : user.email,
            message: input,
            photoUrl: user.photoUrl || "", //If photourl is not there just use blank
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 

        })
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                <CreateIcon/>
                <form >
                    <input value ={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick = {sendPost} type="submit"> Submit </button>
                </form>
                </div>

               <div className="feed_inputOptions">
                   <InputOption Icon = {ImageIcon} title = 'Photo' color = "#7085F9"/>
                   <InputOption Icon = {SubscriptionIcon} title = 'Video' color = "#7085F9"/>
                   <InputOption Icon = {EventNoteIcon} title = 'Event' color = "#7085F9"/>
                   <InputOption Icon = {CalenderViewIcon} title = 'Write article' color = "#7085F9"/>

               </div>

            </div>

            {/* Posts */}

            {/* What needs to be animated using the Flipmove goes here */}


            <FlipMove>
            {posts.map(({id, data:{ name, description,message, photoUrl}}) =>(
                <Post
                    key = {id} //For only the new one to be added thats y key is used, and key is important for flipmove to work
                    name = {name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                />
            ))}
            </FlipMove>
            

            

        </div>
    )
}

export default Feed
