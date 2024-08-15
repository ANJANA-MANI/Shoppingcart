import React, { useEffect, useState } from 'react'
import Product from './Product';
import { json, useNavigate } from 'react-router-dom';
function Products(addtoCart) {
    const[products,setProducts]=useState([])
    useEffect(()=>{
     getProducts();
    },[])
    const getProducts=async()=>{
    await fetch('https://dummyjson.com/products')
    .then((response)=>response.json())
    .then((result)=>{
        console.log(result)
        setProducts(result.products)
        console.log(products);  
       
    }
    )}
    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products))
    })
  return (
    <div style={{margin:"25px"}}>
        <h2>Products</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {products?.map((i)=><Product i={i} products={products} addtoCart={addtoCart}/>
        )}
        </div>
        
    </div>
  )
}

export default Products