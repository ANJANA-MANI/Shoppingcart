import React, { useEffect, useState } from 'react'
import Products from './Products'
import Productlist from './Productlist';
import Cart from './Cart';

function Shoppingcart() {
    const[cart,setCart]=useState([])
    useEffect(()=>{
      console.log('cart',cart);
    },[cart])

  const addtoCart=(i)=>{
console.log('Adding to cart......',i);
 setCart((prevcart)=>{
const found=prevcart.find((item)=>item.id===i.id)
 return found?prevcart.map((item)=>item.id===i.id?{...item,quantity:item.quantity+1}:{...item})
 :[...prevcart,{...i,quantity:1}]
 })}
 const removeCart=(i)=>{
  console.log('Removing from cart');
  setCart((prevcart)=>{
    const found=prevcart.find((item)=>item.id===i.id)
     return found?prevcart.map((item)=>item.id===i.id?{...item,quantity:item.quantity-1}:{...item})
     :prevcart.filter((item)=>item.id!==i.id)
     })
 }
  return (
    <>
 <div>Shoppingcart</div>
<Productlist onaddtoCart={addtoCart}/>
{cart.length>0?<Cart cart={cart} onremoveCart={removeCart}/>:<></>}

</>
   
  )
}

export default Shoppingcart