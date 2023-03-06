
import React, { useState } from 'react';
function AddItem({list , setList}){
 
    function add(){
        setList([...list,{
            name: "gorev" + (list.length + 1 ),
            status: "active",
            id: list.length +1,
        }])
    }
    function handleChange(event) {
        var mission = event.target.value;
        console.log(mission);
    }  
    return(
        <>
            <input type="text" name="add"  onChange={ handleChange} /> 
             <button onClick={add} > Add</button> 
        </>
    )
}
export default AddItem;