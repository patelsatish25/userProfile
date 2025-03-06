 import React,{useState} from "react";

 function Ch({ onSubmit, childProps }) {
    console.log(childProps.id);

    const[value,newval]=useState({
        val1:childProps.id
    })

    function submit(e) {
        e.preventDefault();
        console.log(value);
        const a="i am";
        onSubmit(a);
        
    }

    return (
         <>
             <button type="button" onClick={submit}>click</button>
        </>
    );
 }

 export default Ch;
