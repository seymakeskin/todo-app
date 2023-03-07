
import React, { useState } from 'react';
function AddItem({list , setList}){
    const [inputName, setInputName] = useState();

    function add(){
    
        setList([...list,{
            name: inputName + (list.length + 1 ),
            status: "active",
            id: list.length +1,
        }])
        setInputName("")
    }

   
    function handleChange(event) {
        setInputName(event.target.value)
    }  
    return(
        <>
            <input type="text" name="add" value={inputName} onChange={handleChange} /> 
             <button onClick={add} > Add</button> 
        </>
    )
}
export default AddItem;