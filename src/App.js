import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import { Example } from './components/Example';
import ListItem from './components/ListItem';


function App() {
    const [list, setList] = useState([
      {
        name: "Görev 1",
        status: "active",
        id:1,
  
      },
      {
          name: "Görev 2",
          status: "passive",
          id:2,
      }
    ]);


    function add(){
      setList([...list,{
        name: "Görev 3",
        status: "passive",
        id:3,
       }])
    }


  return (
    <div className="App">
        <h1 className="Header"> Things To do</h1>
        <button onClick={add} > Add</button>
        {/* <AddItem list={list} /> */}
        {
          list.map(item => (  
            <ListItem key= {item.id} data={item} />
          ))
        }  
        {list.length}
    </div>
  );
}

export default App;
