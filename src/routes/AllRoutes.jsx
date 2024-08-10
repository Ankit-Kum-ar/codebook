import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProductsList from "../pages/Products/ProductsList"
import ScrolltoTop from "../Helpers/ScrolltoTop"
import { ProductDetail } from "../pages/ProductDetail"

 const AllRoutes = () => {
   return (
     <>
        <ScrolltoTop/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsList/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
        </Routes>
     </>
   )
 }
 
 export default AllRoutes
 