import React,{useState} from"react";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";
import notes from "./Notes.js";
import Input from"./InputArea.jsx";
import Favourite from "./Favourite.jsx";





    // const[favorite,setFavorite]=useState({
    //     title:"",
    //     content:""
    // });
  
    // const [favlist, setFavlist] = useState([]);

    // function additem(fav) {
    //     const checkItem=favlist.some((favNote)=>favNote.id===fav.id && favNote.content===fav.content);
        
    //     if(!checkItem){
    //         setFavlist(prevNote => [fav,...prevNote]);
    //     }else (
    //         alert("Note Already added to Favnote list")
    //     )
    // }

    // console.log(notes) ;
        
    // function CreateNote(note){
    //     return<Note
    //     title={note.title}
    //     content={note.content}
    //     value="Add to the favorite"
    //     onAdd={additem}
    //     />
    // }
    // function deleteItem(id){
    //     setFavlist(prevNotes=>{
    //         return prevNotes.filter((item,index)=>{
    //             return index!==id;
    //         })
    //     })
    // }
  
//     function deleteItem(id){
//         setFavlist(prevNotes => prevNotes.filter((item, index) => index !== id));
//     }
//     return<div>
//          <Header/>
//         {notes.map((note)=>{return <Note
//         title={note.title}
//         content={note.content}
//         value="Add to favorite"
//         onAdd={additem}
//         onDelete={deleteItem}
//         />})}
//         <div style={{"width":1000, "height":600, "backgroundColor":"red","marginTop":300}}>

//             {favlist.map((fav,index)=>(
//                     <Note key={index} id={index}title={fav.title} content={fav.content} value={"remove"} onDelete={deleteItem}/> 
//             ))}
     
//         </div>
//          <Footer/>
//     </div>
// }
function App(){

    const[note,setNotes]=useState([]);
    const[favorite,setFavorite]=useState({
        title:"",
        content:""
    })
    const[favlist,setFavlist]=useState([]);

    function addNotes(input){
        setNotes(prevNote=>{
            return [...prevNote,input]
        });
        
    }

    function deletenote(id){
       setNotes(prevNotes=>{
        return prevNotes.filter((note,index)=>{
            return index!==id;
        })
       })
    }
    function removeNote(id){
        setFavlist(prevNotes=>{
            return prevNotes.filter((note,index)=>{
                return index!==id;
            })
           })
    }

    function Addnote(fav){

        setFavlist(prevNote=>[fav,...prevNote])
    }
    return <div class="Application" >
        <Header/>
        <Input onAdd={addNotes}/>
        {Array.isArray(note) &&note.map((note, index) => (
         <Note key={index}id={index}title={note.titlenote} content={note.contentnote} onDelete={deletenote} onRemove={removeNote} onAddNote={Addnote} value={"Add to fav"}/>
      ))}
         <div style={{"width":1000, "height":600, "backgroundColor":"red","marginTop":300}}>

            {favlist.map((fav,index)=>(
                    <Note key={index} id={index}title={fav.title} content={fav.content} value={"remove"}  onRemove={removeNote}/> 
            ))}
     
        </div>
        <Footer/>

    </div>
}

export default App;