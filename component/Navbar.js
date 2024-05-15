import Link from 'next/link';
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Image from 'next/image';
import { FaCirclePlus } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc"
import { FaCircleMinus } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useRef } from 'react';
function Navbar({ cart, subTotal, removeFromCart, addToCart, clearingCart }) {

  // hera we are defing the toggle button  
  const toggleButton = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')


    }

    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()

  return (
    <>
      <header className="text-white h-20 bg-pink-500 body-font shadow-xl  flex fixed top-0 z-10  w-full">

        {/* Yha phe logo add ke skte h  */}
        <Link href={'/'} className="flex title-font font-medium mt-3 ml-3  max-w-fit items-center text-white mb-4 md:mb-0">
          <img className=" max-w-full h-10 rounded-full" src="/logo_name.png" alt="Logo" />

        </Link>

        <div className="container sm:mt-auto flex flex-nowrap  max-w-fit justify-between mt-auto ml-7 mb-auto md:flex-row flex-col">

          <div>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-md  justify-center">
              <Link href={"/Tsirt"} className="mr-5 hover:text-gray-800">Tsirt</Link>
              <Link href={"/hoddies"} className="mr-5 hover:text-gray-800">Hoddies</Link>
              <Link href={"/mug"} className="mr-5 hover:text-gray-800">Mug</Link>
              <Link href={"/Stikers"} className="mr-5 hover:text-gray-800">Stikers</Link>
            </nav>
           </div>

        </div>


        <div className="flex">
           <Link href='/Login'>
           <button className= ' pointer-events-auto absolute sm:right-16 sm:mt-7 text-2xl'>
           <VscAccount />
           </button>
           </Link>  
         

          <button onClick={toggleButton} className="  pointer-events-auto absolute right-0 mt-7 ">

            <FaCartShopping className=" text-2xl mx-8 md:mx-4 sm:mx-2" />
          </button>

        </div>



        {/* here we are creating the sidebar  */}
        <div ref={ref} className="sidebar  h-[100vh] absolute top-0 right-0 px-8 py-10 transform transition-transform translate-x-full bg-pink-200">


          <h2 className="text-xl font-bold text-center text-black">Shoping cart</h2>
          <div onClick={toggleButton} className="cross cursor-pointer absolute text-pink-700  top-5   right-2"><ImCross /></div>

          <ol className='list-decimal text-black'>
            {Object.keys(cart).length == 0 && <div className='m-4 font-normal text-gray-600'> Cart mai Kuch Nhi h </div>}

            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className='flex my-5 '>
                  <div className='w-2/3 semibod ml-2 mr-4 '> {cart[k].name}</div>
                  <div className='flex w-1/3 items-center justify-center'>
                    <button onClick={() => { removeFromCart(k, k.qty, k.price, k.name, k.size, k.variant) }}>
                      <FaCircleMinus className='mr-2 text-pink-500 text-lg' />
                    </button>

                    {cart[k].qty}
                    <button onClick={() => { addToCart(k, k.qty, k.price, k.name, k.size, k.variant) }}>
                      <FaCirclePlus className='ml-2 text-pink-500 text-lg' />
                    </button>
                  </div>



                </div>

              </li>
            })

            }




          </ol>
          <div><h2 className='text-black  font-bold'>Subtotal : ₹{subTotal}</h2></div>
          <div className='flex  gap-2'>
            <Link href={'/Checkout'}>
              <button className='flex  bg-pink-500 hover:bg-pink-600 font-bold p-2 rounded  ' >

                <p>Check-out</p>
                <MdOutlineShoppingCartCheckout className='mt-1  text-2xl ml-1' />



              </button>
            </Link>
            <button onClick={clearingCart} className='flex  bg-pink-500  hover:bg-pink-600 font-bold p-2 rounded  ' >
              <p>Clear cart</p>

            </button>

          </div>




        </div>
      </header>


    </>
  )
}

export default Navbar