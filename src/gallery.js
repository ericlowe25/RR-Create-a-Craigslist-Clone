import React from "react"
import {postings} from "./postings.js"
import Posting from "./posting"

// const craigPost = require('./postings')

function Gallery(){
    return (
        
        <div className="gallery">
            {postings.map((post, index)=>{
                return <Posting posting={post} key={index}/>
            })}
        </div>
        )
    }

export default Gallery

// {postings.map((posting, index)=>{
//     return(
//     <Posting posting={post} key={i}/>
//     )
// })}