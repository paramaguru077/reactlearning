
import { Header } from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import Additem from './Additem';

function App() {
  const [items,setItem]= useState(
    [
      {
        id:1,
        checked:false,
        item:"learning react"
      },
      {
        id:2,
        checked:true,
        item:"practicing dsa"
      },
      {
        id:3,
        checked:true,
        item:"learnig aptitude"

      }
    ]

  );

  const [newItem, setNewItem] = useState(" ");


  const handlecheck = (id)=>{
    const listItems = items.map((item)=>
       item.id===id ? {...item,checked:!item.checked}:item)
    setItem(listItems)
    
  }
  const handleDelete = (id)=>{
    const listitems = items.filter((item)=>
      item.id!==id 
    )
    setItem(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems));
    
}

 const handleSubmit =(e)=>{
  console.log(submit);
 }
 
  
  return(
    <div className="App">
      <Header title="To DO LIST" />

      <Additem
      handleSubmit={handleSubmit}
      newItem={newItem} 
      setItem={setNewItem}/>
      
      <Content 
      items={items}
      handleDelete={handleDelete}
      handlecheck={handlecheck}
       
      
      />
      <Footer 
      length={items.length}
       />
    </div>
    
  )
 
 
}

export default App
