import React from 'react'

export let Products:any

function Product (this: any, id: number, title: string, price: number, description:string, category:string, image:string, quantity:number) {
    this.id = id,
    this.title = title,
    this.price = price
    this.description = description
    this.category = category
    this.image = image
    this.quantity = 0

}
export default async function ProductsGet() {
    const res = await fetch('https://fakestoreapi.com/products')
  return (
    res.json().then((data) => Products =(data.map((item: any) => new (Product as any)(item.id, item.title, item.price, item.description, item.category, item.image))),
)
  )
}
