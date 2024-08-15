import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({i,addtoCart}) {
    const navigate=useNavigate()
  return (
    <div  className ="product"style={{ 
        border:"solid 1px grey" ,borderRadius:"10px",
        boxShadow:"2px 2px 2px grey",
        width:"250px",height:"250px",
        margin:"15px"
    }} onClick={()=>{navigate(`/Products/Details/${i.id}`)}}>
        <h3>{i.title}</h3>
        <img src={i.thumbnail} alt="image" style={{width:"100px",height:"100px"}}/>
        <h4>Price:{i.price}</h4>
        <button type="button" onClick={()=>addtoCart}>ADD TO CART</button>
    </div>
  )
}

export default Product