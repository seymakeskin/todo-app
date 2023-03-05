
import React, { useState } from 'react';
function AddItem({list}){
    // list.push({
    //     name: "Görev 3",
    //     status: "active",
    //     id:3,
      
    //   })
    

 
    function add(){
      setList([...list,{
        name: "Görev 3",
        status: "passive",
        id:3,
       }])
    }
  
    return(
        <>
            <input type="text" name="add" /> 
             <button onClick={add} > Add</button>
        </>
    )
}
export default AddItem;