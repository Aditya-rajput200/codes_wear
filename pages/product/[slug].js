import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Post({addToCart}) {
    const router = useRouter()
    const {slug} = router.query;
     const [service , setService] = useState();
    const [pins, setpins] = useState();
    const chekServicevilty = async () => {
        try {
          let Pincode = await fetch("http://localhost:3000/api/pincode");
          let pinsJson=  await Pincode.json() 
   
          
          // checking the wheathe the pincode exists 
          if(pinsJson.includes (parseInt(pins))) {
                     setService(true)
          }
          else {
            setService(false)
          }
     
              
           
        } catch (error) {
          console.error(error);
        } 
   
    } 

     const onChangePin = async (e) => {
     
      setpins( e.target.value);

     

     }
  return (
  <>
  <section className="text-black body-font overflow-hidden">
  <div className="container px-5 py-20 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded" src="https://m.media-amazon.com/images/I/612Rl6GKHoL._SX679_.jpg"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-black tracking-widest">Codes wear</h2>
        <h1 className="text-black text-3xl title-font font-medium mb-1"> Cotton Relaxed Fit Solid Half Sleeves Oversized T-Shirt for Men|</h1>
        <div className="flex  mb-4">
          <span className="flex">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="ml-3">4 Reviews..</span>
          </span>
          <span className="flex  ml-3 pl-3 py-2 border-l-2 border-black text-black space-x-2">
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed text-gray-500  ">✅100% Cotton Material: Nobero’s Men oversized t-shirts are made entirely from cotton, offering a soft, breathable feel against your skin for maximum comfort and ease of wear <br />
✅Oversized Fit: Embrace relaxed style with our loose-fitting t-shirts for men, designed for ultimate comfort and freedom of movement, perfect for lounging or casual outings and every day wear. <br />
✅Classic Round Neck Design: Elevate your wardrobe essentials with our timeless crew neck t-shirt for men, offering a versatile neckline that complements any casual or layered look with ease.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-600 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-black rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-black ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-black ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border focus:ring-2 focus:ring-gray-800 bg-transparent appearance-none py-2 focus:outline-none  text-gray-600 pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-black pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-600"> ₹499.00</span>
          <button className="flex ml-7 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
          <button onClick={() => addToCart(slug, 1,499,"Code-with-Aditya", "Xl", "Brown")} className="flex ml-5 text-white bg-pink-500 border-0 py-2 md:px-3  px-1 focus:outline-none hover:bg-pink-600 rounded">Add to cart</button>

          <button className="rounded-full w-10 h-10 bg-gray-400 p-0 border-0 inline-flex items-center justify-center  text-gray-600 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <div className='flex mt-6 w-2/3 '>
          <input onChange={onChangePin} type="text" maxlength="6" placeholder='Enter the Pincode...' className='border-2 w-40 border-pink-400 font-bold  text-gray-700 p-2 rounded-md focus:outline-none focus:border-blue-500 ' />
          <button onClick={chekServicevilty} className='flex ml-12 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600  rounded'>Check</button>
        </div>
      <div className=''>
      {(!service && service  !=null) && <div className='mt-4 text-red-800'> Sorry!! we are not 
       aviable at this  Location yet! </div> }
       {(service && service  !=null) && <div className='mt-4 text-green-600'> Yehh! we are 
       aviable at this  Location  </div> }
      </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Post