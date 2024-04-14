import React,{useState} from"react";

function Input(props){

    const[input,setInput]=useState({
        titlenote:"",
        contentnote:""
    });

    function handleChange(event){
        const{name,value}=event.target;
        setInput(preValue=>{
            return {
                ...preValue,
                [name]:value
            }
        });
       
        

    }

    return <div className="inputarea">
     
       
        <input onChange={handleChange}type="text"value={input.titlenote} name="titlenote" placeholder="notes" />
        
        <textarea onChange={handleChange}name="contentnote" value={input.contentnote} placeholder="Take a note..." rows="3" />
        <button class="button" onClick={()=>{
            props.onAdd(input);
        }}>Add</button>
     </div>
    
} 

export default Input;