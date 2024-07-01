import React from 'react'
import {FaPlus} from 'react-icons/fa'

const Additem = ({newItem, setItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor="additem">Add item</label>
        <input 
           autoFocus 
           id="additem"
           type="text"
          placeholder='add item '
          required
          value={newItem}
          onChange={(e)=> setItem(e.target.value)} />

        <button type='submit' aria-label="Add Item " onClick={handleSubmit} > 

          <FaPlus />
        </button>
            
           


    </form>
  )
}

export default Additem
