import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";
import Image from "next/image";
import shoppingimg from "../app/shopping-cart.png"  
import shoppingimg2 from "../app/icons8-shopping-cart-96.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Econmerce Example Top tier ",
  description: "Best Online Store Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
 
    <html lang="en">
      
      <body className="bg-dark bg-gradient"style={{height:"100vh"}}> 
        <nav className=" navbar navbar-expand bg-secondary bg-gradient text-white pb-3 pt-3 position-fixed w-100 " style={{zIndex:"1"}}>
        <div className="navbar-nav ">
        <Link className="nav-link text-white fs-4 ps-3 fw-bold" href="/"  >Home</Link>
        <Link className="nav-link text-white fs-4 ps-4 fw-bold" href="/Store">Store</Link>
        <Link className="nav-link text-white fs-4 ps-4 fw-bold" href="/Contact">Contact Us</Link>
        <Link className="nav-link text-white fs-4 pe-5 fw-bold position-absolute end-0" href="/Cart"><Image src={shoppingimg2} alt="Cart" width={50} height={50}/></Link>
        </div>
        </nav>

        {children}
        
        </body>
    </html>
    </>
  );
}
