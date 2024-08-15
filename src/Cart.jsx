import React from 'react'

function Cart({cart,onremoveCart}) {
  return (
    <>
    <div>Cart({cart.reduce((s,i)=>s+i.quantity,0)})</div>
    <div>Total({cart.reduce((s,i)=>s+i.quantity*i.price,0)})</div>
    {cart?.map((i)=>i.quantity>0?(<div key={i.id} className ="product"style={{ 
        border:"solid 1px grey" ,borderRadius:"10px",
        boxShadow:"2px 2px 2px grey",
        width:"250px",height:"350px",
        margin:"15px"
    }} >
        <h3>{i.title}</h3>
        <img src={i.thumbnail} alt="image" style={{width:"100px",height:"100px"}}/>
        <h4>Price:{i.price}</h4>
        <h4>Quantity:{i.quantity}</h4>
        <button type="button" onClick={()=>onremoveCart(i)}>Remove from cart</button>
    </div>
):"")}
    </>

  )
}

export default Cart