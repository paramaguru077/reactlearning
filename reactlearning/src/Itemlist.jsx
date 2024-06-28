import React from 'react'

import Listelement from './Listelement';

const Itemlist = ({items,handleDelete,handlecheck}) => {
  return (
    
    <ul>
          {items.map((x)=>(
            <Listelement
            x={x}
            key={x.id}
            handleDelete={handleDelete}
            handlecheck={handlecheck}
             />
          ))}
    </ul>
    

  )
}

export default Itemlist
