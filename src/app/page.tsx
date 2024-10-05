/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import styles from "./page.module.css";
import { use, useEffect } from "react";
import ProductsControl from "./backend/ProductsControl";
import { Products } from "./backend/ProductsGet";
import factoryimg from "../app/factorhpimg.jpeg"
import fastcart from "../app/icons8-fast-cart-90.png"
import lock from "../app/icons8-lock-100.png"
import trust from "../app/icons8-trust-100.png"
import happy from "../app/overjoyed-afro-woman-unboxing-carton-600nw-2036962763.webp"
import ProductsGet  from "./backend/ProductsGet";
export default async function Home() {

  await ProductsGet() 
  return (
    <>
    <div className="container-flex" style={{marginTop:"15vh"}}>
      <h1 className="text-decoration-underline text-white fw-bold mb-3 ms-3">Featured Products</h1>
      <div className="row mx-auto">
      <div className="col-12 col-xl">
      <div className="card bg-secondary bg-gradient text-white py-3 my-3 my-0-lg">
        <Image className="card-img position-relative img-thumbnail p-auto w-25 border border-5 border-dark rounded-3 rounded mx-auto d-block "  src={Products[0].image} alt={Products[0].title} width={300} height={300}/>
        <div className="card-body">
        <h1 className="card-title text-center fs-2 fw-bold lh-md text-break mb-3">{Products[0].title}</h1>  
        <h2 className="card-subtitle text-center fw-bold mb-4">${Products[0].price.toFixed(2)}</h2>
        <p className="card-text  mb-5 text-break fw-bold px-auto">{Products[0].description}</p>

        </div>
      </div>
      </div>

      <div className="col-12 col-xl">
      <div className="card bg-secondary bg-gradient text-white py-3 my-3 my-0-lg ">
        <Image className="card-img position-relative img-thumbnail p-auto w-25 border border-5 border-dark rounded-3 rounded mx-auto d-block "  src={Products[1].image} alt={Products[1].title} width={300} height={300}/>
        <div className="card-body">
        <h1 className="card-title text-center fs-2 fw-bold lh-md text-break mb-3">{Products[1].title}</h1>  
        <h2 className="card-subtitle text-center fw-bold mb-4 ">${Products[1].price.toFixed(2)}</h2>
        <p className="card-text  mb-5 text-break fw-bold mx px-auto">{Products[1].description}</p>
        </div>
      </div>
      </div>

      <div className="col-12 col-xl">
      <div className="card bg-secondary bg-gradient text-white py-3 my-3 my-0-lg">
        <Image className="card-img position-relative img-thumbnail p-auto w-25 border border-5 border-dark rounded-3 rounded mx-auto d-block "  src={Products[2].image} alt={Products[2].title} width={300} height={300}/>
        <div className="card-body">
        <h1 className="card-title text-center fs-2 fw-bold lh-md text-break mb-3">{Products[2].title}</h1>  
        <h2 className="card-subtitle text-center fw-bold mb-4">${Products[2].price.toFixed(2)}</h2>
        <p className="card-text  mb-5 text-break fw-bold px-auto">{Products[2].description}</p>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="container-flex py-5 mx-auto px-auto " style={{marginTop:"9%",marginBottom:"5%"}}>
      <div className="row" style={{marginBottom:"8%"}}>
      
      <div className=" text-white text-start fs-1 fw-bold lh-lg float-start text-break me-5  ps-5 py-5 position-relative col-sm-12 col-xl-5 lh-lg">
      Welcome to our ultimate shopping destination, where you can discover EVERYTHING you need for your daily life at unbeatable prices. From trendy fashion to cutting-edge electronics, we've got you covered. Our store is your one-stop shop, just like the diligent factory worker in the picture, ensuring top-notch quality and efficiency. Dive into our extensive range of products and enjoy unparalleled convenience. Shop with us to make your shopping experience smooth and budget-friendly.
         </div>
      <Image src={factoryimg} className="ms-auto d-none d-xl-block float-end me-5 pt-5 pb-5 ms-5 w-50 h-50 col-5-lg " alt="Background Image" width={1000} height={1500}/>
         </div> 
    </div>



    <div  className="container-flex my-5 py-5 ">
    <div className="row py-5 px-5" style={{marginBottom:"8%"}}>
      <div className="col-lg col-12">
      <div className="card bg-transparent text-white w-75 py-5">
      <Image src={fastcart} className="card-img-top img-thumbnail bg-transparent border border-0 w-25" alt="Background Image" width={90} height={90}/>
      <div className="card-body">
        <h1 className="card-title fw-bold "> Fast Shipping</h1>
        <h3 className="card-subtitle fw-bold mb-3">Get Your Orders in Record Time!</h3>
        <p className="card-text text-start fs-4">Highlighting our store's commitment to speedy shipping, we pride ourselves on our quick order processing and delivery times. Customers will appreciate the efficiency and promptness with which their purchases are shipped to their doorsteps.</p>
        </div>
      </div>
      </div>

      <div className="col-lg col-12">
      <div className="card bg-transparent w-75 text-white py-5">
      <Image src={lock} className="card-img-top img-thumbnail bg-transparent border border-0 w-25" alt="Background Image" width={200} height={200}/>
      <div className="card-body ">
        <h1 className="card-title fw-bold my-2">Top-Notch Security Measures</h1>
        <h3 className="card-subtitle fw-bold mb-3">Ensuring Your Peace of Mind</h3>
        <p className="card-text text-start fs-4">This prompt focuses on the security protocols and measures in place to protect customer data and ensure safe transactions. By highlighting our store's dedication to safeguarding sensitive information, customers can shop with confidence knowing their privacy is a top priority.</p>
        </div>
      </div>
      </div>

      <div className="col-lg col-12">
      <div className="card bg-transparent w-75 text-white py-5">
      <Image src={trust} className="card-img-top img-thumbnail bg-transparent border border-0 w-25" alt="Background Image" width={200} height={200}/>
      <div className="card-body">
        <h1 className="card-title fw-bold my-2">Reliability You Can Count On</h1>
        <h3 className="card-subtitle fw-bold mb-3">Consistent Performance, Trusted Service</h3>
        <p className="card-text text-start fs-4">Emphasizing the reliability of our store, this prompt showcases our track record of delivering quality products on time. By highlighting our commitment to consistency and dependability, customers will feel confident in choosing our store for their shopping needs</p>
        </div>
      </div>
      </div>
      </div>
    </div>


    <div  className="container-flex my-5 py-5 ">
    <div className="row">
      <Image src={happy} className="ms-5 float-start me-auto pt-5 pb-5 w-50 h-50 col-6 d-none d-xl-block" alt="Background Image" width={1000} height={1500}/>
    <div className=" text-white text-start fs-1 fw-bold lh-lg float-end text-break me-auto ms-auto ps-5 py-5 position-relative col-5 lh-lg col-12 col-xl-4 ">
    Ordering from our online store is a game-changer! Say hello to shopping made easy, right from your couch. With a click, discover a treasure trove of products not found elsewhere. 
      Unleash your inner savvy shopper with exclusive deals and discounts. Dive into a seamless browsing experience, where finding your perfect match is a breeze. 
       And the cherry on top? Your goodies delivered straight to your doorstep! Why settle for less when you can have it all at the click of a button?
         </div>
      
         </div> 
    </div>

    </>
  );
}


    
    