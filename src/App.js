import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import React, { useState } from 'react';


function App() {

  let listArr = [
    {
      name: "Görev 1",
      status: false,
      id:1,

    },
    {
        name: "Görev 2",
        status: true,
        id:2,
    },
    {
      name: "Görev 3",
      status: true,
      id:3,
  }
  ]
  console.log(listArr);
  
  const [list, setList] = useState(listArr);

  return (
    <div className="App ">
        <h1 className="Header"> Things To do</h1>
        <AddItem list={list} setList={setList} />

        {
          list.map(item => (  
            <ListItem key= {item.id} data={item}  list={list}  setList={setList}  />
          ))
        }  
    </div>
  );
}

export default App;
