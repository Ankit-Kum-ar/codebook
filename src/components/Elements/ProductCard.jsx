import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating';
const ProductCard = ({product}) => {
    const {name, overview, price, rating, poster, best_seller} = product;
    return (
        <div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/" className='relative'>
                {best_seller && <span className='absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded'>Best Seller</span>}
                <img className="w-full rounded-t-lg h-64" src={poster} alt={name} />
            </Link>
            <div className="p-5">
                <Link href="/">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className='my-3 font-normal text-gray-700 dark:text-gray-400'>{overview}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Rating rating={rating}/> 
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price }</span>
                    <Link href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
