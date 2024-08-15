import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

function Details() {
    const {id}=useParams()
    const [product,setproduct]=useState([])
    useEffect(()=>{
const stored=localStorage.getItem('products')
console.log(JSON.parse(stored));
setproduct(JSON.parse(stored).find((i)=>i.id==id));
console.log('product',product);


    },[])
  return (
    <div>Details of {`${id}`}
    {product? <Product i={product}/>:<></>}
   
    </div>
  )
}

export default Details