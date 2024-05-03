import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();

    
    
  return (
    <div className='mt-28 px-4 lg:px-24'>

        <h1 className='mb-3 text-blue-700 text-3xl ml-4 underline'> ** {bookTitle} ** </h1>
        <div className='flex justify-center align-middle'>
          <img src={imageURL} alt="" className='h-96 ml-4' />
          <div className='bg-blue-600 h-8 hover:bg-black p-2 rounded'>
            <button onClick={handleCart}>
              <FaCartShopping className='w-4 h-4 text-white' />
            </button>
          </div>
        </div>
        <p className='mt-4 mb-4 text-lg ml-4 text-'>{bookDescription}</p>
    </div>
  )
}

export default SingleBook