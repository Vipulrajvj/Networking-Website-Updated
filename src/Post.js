import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
import { forwardRef } from 'react'

//Ref provides an id to the forwardRef

const Post = forwardRef(({name , description, message, photoUrl}, ref) => {
    return (
        <div>
            <div ref = {ref} className="post">
                <div className="post_header">
                    <Avatar src = {photoUrl}> {name[0]} </Avatar>
                    <div className="post_info">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="post_body">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
})

export default Post;
