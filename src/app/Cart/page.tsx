
'use client'
import React, { useEffect } from 'react'
import Cart from './Cart'
import Image from 'next/image'
import { useState } from 'react'
import checkout from './checkout'


export default function Cartpage() {
    console.log(Cart)
    const [state, setState] = useState(Cart)
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)


    function Cartif(product:any) {
        if (product.quantity === 0) {
            setState(state.filter((item:any) => item !== product))
            Cart.splice(Cart.indexOf(product), 1)
        }  
    }
     function HandleCart(product:any) {
        product.quantity = 0
        Cartif(product)
}



  return (
    <div  className="container-flex my-5" >
      {state.map((product:any) => (
        <div className="container p-5 my-5 "  key={product.id}>
  
          <div className="card  border border-secondary  border-5 text-center p-5 bg-dark bg-gradient text-white " >
          <Image className="card-img position-relative img  p-auto  w-25 border border-5 border-dark rounded-3 rounded me-auto d-block "  src={product.image} alt={product.title} width={300} height={300}/>  
          <div className="card-body"> 
          <h1 className='card-title text-start  fw-bold'>{product.title}</h1>
          <h4 className='card-subtitle text-start fw-bold mb-4'>${product.price.toFixed(2)}</h4>
          <h3 className='card-text text-start fw-bold mb-5'>Quantity: {product.quantity}</h3>
          <h3 className='card-text text-start fw-bold mb-5'>Total: ${(product.quantity * product.price).toFixed(2)}</h3>
          <button className="btn btn-outline-light fw-bold me-auto d-block" onClick={() => (HandleCart(product))}>Remove item</button>
        
          </div>
            
          </div>
        </div>
      ))}
      {checkout(state)}
    
    </div>
  )
}
