import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";



export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
 

  useEffect(() => {
     console.log('Useeffect is ringing')
  try {
  if(localStorage.getItem("cart") ) {
    setCart(JSON.parse(localStorage.getItem("cart"))); 
    saveCart(JSON.parse(localStorage.getItem("cart")));
  }
  
  } catch (error) {
    localStorage.clear();
    console.error(error);
  }
  
    
  }, [])
  
  
  
  
  //creating the subtotal states 
  

   // creating a function which stroes the cart in local storage
   let saveCart = (newCart) =>{
   try {
    localStorage.setItem("cart",  JSON.stringify(newCart) );
   } catch (error) {
    console.log(error)
   }

      let subT = 0;
      let keys = Object.keys(newCart);
      for (let i=0 ; i<keys.length; i++) {
          subT+= newCart[keys[i]].price *  newCart[keys[i]].qty  
        }
        setSubTotal(subT);
   }
   // ading the New item to the cart 
 

   const addToCart = (itemId,qty,price ,name, size, variant) =>{
    let newCart = cart;
      //checking the weather the item is already in the cart or not 
        if(itemId in cart){
            newCart[itemId].qty = newCart[itemId].qty +1 ;
        }
        else{
             newCart[itemId] = {qty:1,price,name,size,variant}
          }
            setCart(newCart);
            saveCart(newCart);

   }

   // creating a function to remove item from the cart
   const removeFromCart = (itemId,qty,price ,name, size, variant) =>{
    let newCart = cart;
    if(itemId in cart){
      newCart[itemId].qty = newCart[itemId].qty -1 ;
  }
   if(newCart[itemId].qty <= 0){
     delete newCart[itemId];
     
   }
   setCart(newCart);
   saveCart(newCart);
   }

   // clearing cart 
   const clearingCart = () =>{

    setCart({});
    saveCart({});  
   }

  return <>
  <Navbar cart ={cart} removeFromCart= {removeFromCart}   addToCart = {addToCart}  subTotal = {subTotal} clearingCart = {clearingCart}  />
  <Component  cart ={cart} removeFromCart= {removeFromCart} addToCart = {addToCart} subTotal = {subTotal} clearingCart = {clearingCart}  {...pageProps} />;
  <Footer/>
  </> 
}
