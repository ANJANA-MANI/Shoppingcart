import React, { useEffect, useState } from 'react'

function Productlist({onaddtoCart}) {
    const[products,setProducts]=useState([])
    useEffect(()=>{
     getProducts();
    },[])
    const getProducts=async()=>{
    await fetch('https://dummyjson.com/products')
    .then((response)=>response.json())
    .then((result)=>{
       // console.log(result)
        setProducts(result.products)
        //console.log(products);  
       
    }
    )}
  return (
    <>
  
     <h2>Products</h2>
       <div style={{display:"flex",flexWrap:"wrap"}}>
       {products?.map((i)=>(<div key={i.id} className ="product"style={{ 
        border:"solid 1px grey" ,borderRadius:"10px",
        boxShadow:"2px 2px 2px grey",
        width:"250px",height:"350px",
        margin:"15px"
    }} >
        <h3>{i.title}</h3>
        <img src={i.thumbnail} alt="image" style={{width:"100px",height:"100px"}}/>
        <h4>Price:{i.price}</h4>
        <button type="button" onClick={()=>onaddtoCart(i)}>ADD TO CART</button>
    </div>
))}
       </div>
    
    
    </>
   
  )
}

export default Productlist