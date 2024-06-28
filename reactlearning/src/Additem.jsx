import React from 'react'
import {FaPlus} from 'react-icons/fa'

const Additem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm'>
        <label htmlFor="additem">Add item</label>
        <input autoFocus id="additem"
        type="text" placeholder='add item required' />
        <button type='submit' aria-label="Add Item "> 
          <FaPlus />
        </button>
            
           


    </form>
  )
}

export default Additem
