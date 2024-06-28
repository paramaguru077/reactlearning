import React from 'react'
import { FaTrashArrowUp } from "react-icons/fa6";

const Listelement = ({x,handleDelete,handlecheck}) => {
  return (
    <li className='item'>
    <input type="checkbox" onChange={()=> handlecheck(x.id)} checked={x.checked} />
    <label style={(x.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>handlecheck(x.id)} > {x.item}</label>
    <FaTrashArrowUp  onClick={()=>handleDelete(x.id)}
      role='button'/>
    
    
  </li>
  )
}

export default Listelement
