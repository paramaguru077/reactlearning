
import { Header } from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import Additem from './Additem';
import Search from './Search';

function App() {
  const [items,setItem]= useState(JSON.parse(localStorage.getItem("todo_list")) );

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState('');

  const addItem = (item) =>{
    const id= items.length ? items[items.length-1].id+1:1;

    const addNewItem ={id,checked:false,item};

    const listItems =[...items, addNewItem];

    setItem(listItems)

    localStorage.setItem("todo_list", JSON.stringify
      (listItems)
    )
  }


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


 const handleSubmit =(event)=>{
  event.preventDefault();
   if(!newItem) return;
   setNewItem('')
   addItem(newItem)
 }
 
  
  return(
    <div className="App">
      <Header title="To DO LIST" />

      <Additem
      handleSubmit={handleSubmit}
      newItem={newItem} 
      setItem={setNewItem}/>
      
      <Search
        search ={search}
        setSearch={setSearch} />

      <Content 
      items={items.filter(i => 
        ((i.item).toLowerCase()).includes(search.toLowerCase()))}
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
