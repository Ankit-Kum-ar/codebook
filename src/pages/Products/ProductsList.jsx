import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Elements/ProductCard'
import FilterBar from './components/FilterBar'
import { useLocation } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ProductsList = () => {
  const [show,setShow] = useState(false);
  const [products, setProducts] = useState([]);

  // useLocation hook to get the search params
  const search = useLocation().search;
  console.log(search); // ?q=react

  // To retrive only react from ?q=react, use URLSearchParams
  const params = new URLSearchParams(search).get('q');
  console.log(params); // react

  // Changing title of page using useTitle custom hook...
  useTitle("Explore eBooks Collection");

  const fetchProducts = async() => {
    const response = await fetch(`http://localhost:8000/products?name_like=${params ? params : ""}`);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <main>
      <section>
        {/* Code for three dots to open menu */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">All ebooks ({products && products.length})</h2>
          <button onClick={() => setShow(!show)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Code for the product Cards that show row-wise using <ProductCard/>*/}
        <div className="flex flex-wrap justify-center lg:flex-row">
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))
          } 
        </div>

        {
          show && <FilterBar setShow={setShow}/>
        }

      </section>
    </main>
  )
}

export default ProductsList
