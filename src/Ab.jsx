import React,{useState} from "react";
 import Ch from "./Ch";
 function Ab()
 {
   const[data,newdata]=useState(
     {
       id:"01",
       name:"satish"

    })
    function onsubmit()
     {
       console.log("click");
    }

    return(
      <>
         <Ch  
                  childProps={data}
                   onSubmit={onsubmit}
        
        />
      </>
     )
   
 }
 export default Ab;