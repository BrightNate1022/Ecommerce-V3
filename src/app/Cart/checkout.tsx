import React from 'react'

export default function Checkout(Cart:object[]) {
    let total:number = 0
    Cart.map((item:any) => total += (item.price * item.quantity)) 
  return (
    <div className='container pt-5 fs-1 fw-bold text-white text-center'>
      Total: ${total.toFixed(2)}
    </div>
  )
}
