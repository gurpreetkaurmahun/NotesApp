import React from"react";

function footer(){
   var date=new Date();
    return <div class="foot" >
        <p >Copright Protected @ {date.getFullYear()} </p>
    </div>
}

export default footer;