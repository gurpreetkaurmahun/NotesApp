import React from "react";
import note from "./Notes";
import { useState } from "react";






//     const[fav,setFav]=useState({
//         title:"",
//         content:""
//     })
//     function handleFavourite(){
//         if(props.value=="Add to favorite"){
//             setFav({ title: props.title, content: props.content }); // Update the local state fav with the title and content
//     props.onAdd({ title: props.title, content: props.content });
//         }else if(props.value=="remove"){
//             props.onDelete(props.id);
//         }
    
        
//     }
//     return <div class="note">
//         <p >{props.title}</p>
//         <p >{props.content}</p>
//         <button onClick={handleFavourite}  name="button">{props.value}</button>
      
//     </div>
// }

function Note(props){
    const date=new Date();
    const [fav,setFav]=useState({
        title:"",
        content:""
    })

    function handleFavourite(){
        if (props.value==="Add to fav"){
            // setFav(prevNote=>{
            //     title:props.title,content :props.content
            setFav({ title: props.title, content: props.content });
            props.onAddNote({title:props.title,content:props.content})
            }
        else if(props.value==="remove"){
            props.onRemove(props.id);
        }
    }
    return <div class="note">
        <p style={{fontWeight:"bold" }}>Note<span style={{ float: "right",marginRight:"10px",fontWeight:"bold" }}>{date.toLocaleDateString()}❤️</span></p>
        <p >Title:{props.title}</p>
        <p >Content:{props.content}</p>
        <button onClick={()=>{
            props.onDelete(props.id);
        }}class="notebutton ">Delete </button>
        <button onClick={handleFavourite}>{props.value}</button>
    </div>
}
export default Note;

