import React from 'react'
import Itemlist from './Itemlist';



const Content = ({items, handleDelete, handlecheck}) => {
  
  return (
    <main>
      {
        (items.length)?(
           <Itemlist 
           items={items}
           handleDelete={handleDelete}
           handlecheck={handlecheck} />

        ):(
          <p> list is empty</p>
        )

      }
    </main>
  );
};

export default Content

