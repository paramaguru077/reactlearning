import React from 'react'

function Footer({length}) {
  return (
    <div>
        <footer>
         { (length<=1) ? <h4> list item</h4> :  <h4>list items</h4> }

        </footer>
      
    </div>
  )
}

export default Footer
