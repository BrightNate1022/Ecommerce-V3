
import Image from "next/image";
import ProductsGet from "../backend/ProductsGet";
// import { test } from "./backend/ProductsGet";
import { use, useEffect } from "react";
import ProductsControl from "../backend/ProductsControl";
import { Products } from "../backend/ProductsGet";
import Button from "./Button";
import Cart from "../Cart/Cart";
export default async function Store() {

  await ProductsControl();

  return (
    <>
    <div  className="container my-5 pt-5 ">
    <div className="row">
    {Products.map((product:any) => (
    <div className="container my-5 col-5" key={product.id}>
    <div className="card border border-secondary border-5 text-center p-5 bg-dark bg-gradient text-white" key={product.id} >
      <Image className="card-img position-relative img-thumbnail p-auto w-25 border border-5 border-dark rounded-3 rounded mx-auto d-block "  src={product.image} alt={product.title} width={300} height={300}/>
      <div className="card-body">
      <h2 className="card-title text-break fw-bold">{product.title}</h2>
      <h3 className="card-subtitle fw-bold pt-2 mb-4">${product.price.toFixed(2)}</h3>
      <p className="card-text text-white-50 mb-5 text-break  fw-bold">{product.description}</p>
      <Button item = {JSON.parse(JSON.stringify(product))}/>
      </div>
    </div>
    </div>
    ))}
    </div>
    </div>
    </>
  );
}