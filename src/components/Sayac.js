import React, { useState } from 'react';


function Sayac(){
   
    const [count, setCount] = useState(0)

    console.log('Sayaç çalıştı');
    return( 
        <>
            <span>{count}</span>
            <button onClick={()=> {
                setCount(count +1)
            }} >arttır</button>
            <button onClick={ ()=>  setCount(count -1) }>azalt</button>
            <button onClick={ ()=> setCount( 0 ) }>Reset</button>
        </>
    )
}
export default Sayac;