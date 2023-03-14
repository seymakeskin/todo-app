import React, { useState } from 'react';

function ListItem(props){
    const data = props.data;
    const list = props.list;

    const [check, setCheck] = useState(props.data.status);

    const handleChange = event => {
        //setCheck(event.target.checked);
        const indexOf=  list.findIndex((item) => item.id===data.id);
        list[indexOf].status = event.target.checked;
        setCheck([...list]);
        console.log('güncel liste',list);
        // props.setList(...list[indexOf].status);
        //console.log( props.setList(...list[indexOf]));
        list[indexOf].status = true;
    };
   
    return(
        <div>
            <br/>
             <label>
                  <input className="item" type="checkbox" checked={check} onChange={handleChange}   /> 
                  {data.name} {data.status.toString()}
            </label>
            <hr/>
        </div>
    )
}
export default ListItem;