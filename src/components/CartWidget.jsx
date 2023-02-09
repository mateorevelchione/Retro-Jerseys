import { Button } from 'bootstrap'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
      <Button>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>5</span>
      </Button>
    </div>
  )
}

export default CartWidget