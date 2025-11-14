import React, { useState } from 'react'
import '../style/User.css'
import cupcake from '../assets/images/cupcake.jpg';
import vanila from '../assets/images/vanila.jpg'
import st from '../assets/images/strawberry.jpg'
import chocolate from '../assets/images/chocolate.jpg'
import fruitcake from '../assets/images/fruitCake.jpg'
import bread from '../assets/images/bread.jpg'
import bt from '../assets/images/bt.jpg'
import mf from '../assets/images/mf.jpg'
import dn from '../assets/images/dn.jpg'
import pd from '../assets/images/pd.jpg'
import cheese from '../assets/images/cheese.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CakeListHorizontalContainer() {

  const [cakes, setCake] = useState([]);
  const navigate = useNavigate();

  const GetCakeUrl = "http://localhost:3000/cake/getcakebyflavour"


  async function getProduct(product){
   try{
    await axios.get(`${GetCakeUrl}/${product}`).then((res)=>{
      console.log(res.data);
      navigate(`/cake/${product}`)
      
    }).catch((err)=>{
      console.log(err.message);
      console.log("error from then catch")
      
    })

   }catch(error){
    console.log(error.message);
    console.log("error from try catch block");
   }
    
    // await axios.get(`${GetCakeUrl}`)
  }
  return (
    <>
      <div className='cake-scroll-container' id='cake-list-container'>
    
        
     <div className='cake-scroll-inner container'>
        <img src={cupcake} className='cakeImg' alt="" onClick={()=>getProduct("cupcake")}/>
        <img src={st} className='cakeImg' alt="" onClick={()=>getProduct("strawberry")}/>
        <img src={vanila} className='cakeImg' alt="" onClick={()=>getProduct("vanila")}/>
        <img src={chocolate} className='cakeImg' alt="" onClick={()=>getProduct("chocolate")}/>
        <img src={fruitcake} className='cakeImg' alt="" onClick={()=>getProduct("fruitcake")}/>
        <img src={bread} className='cakeImg' alt="" onClick={()=>getProduct("bread")}/>
        <img src={mf} className='cakeImg' alt="" onClick={()=>getProduct("muffin")}/>
        <img src={pd} className='cakeImg' alt="" onClick={()=>getProduct("pudding")}/>
        <img src={dn} className='cakeImg' alt="" onClick={()=>getProduct("donut")}/>
        <img src={cheese} className='cakeImg' alt="" onClick={()=>getProduct("cheesecake")}/>

     
     </div>

   </div>
    </>
  )
}

export default CakeListHorizontalContainer