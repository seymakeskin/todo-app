import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Sayac from './components/Sayac';
import React, { useState } from 'react';


function App() {

let listArr = [
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
  ]
  const [list, setList] = useState(listArr)

  return (
    <div className="App">
        <h1 className="Header"> Things To do</h1>

        <AddItem list={list} setList={setList}/>

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
