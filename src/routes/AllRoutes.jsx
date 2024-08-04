import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProductsList from "../pages/Products/ProductsList"

 const AllRoutes = () => {
   return (
     <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsList/>}/>
        </Routes>
     </>
   )
 }
 
 export default AllRoutes
 