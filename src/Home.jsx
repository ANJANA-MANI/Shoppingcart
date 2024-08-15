import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div style={{ display :"flex", justifyContent:"center",
        alignItems:"center",marginTop:"25%"}} ><button  onClick={()=>navigate('/Products')}
        style={{padding:"10px",borderRadius:"30px",
        boxShadow:"5px 5px 3px yellow",backgroundColor:"blueviolet",
        color:"white",fontSize:"50px",fontFamily:"bold"}} >Products</button></div>
  )
}

export default Home