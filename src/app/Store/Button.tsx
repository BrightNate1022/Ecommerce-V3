'use client'
import React from 'react'
import Cart from '../Cart/Cart'
import { useState } from 'react'

function AddToCart(item:any,) {
    HandleCart(item)
    item.quantity++
}

function HandleCart(product:any) {
    if (product.quantity === 0) {
        Cart.push(product)}
        console.log(product)
        console.log(Cart)
}

export default function Button(props:any) {
   
  return (
    <button className="btn btn-outline-light fw-bold" onClick={() => AddToCart(props.item)}>Add To Cart</button>
  )
}
