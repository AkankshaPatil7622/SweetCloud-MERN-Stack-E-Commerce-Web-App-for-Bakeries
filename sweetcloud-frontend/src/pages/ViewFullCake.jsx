import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import '../style/Baker.css';
import cross from '../assets/images/cross.png';


function ViewFullCake() {
  let { id } = useParams();
  const navigate = useNavigate();
  
  const [cake, setCake] = useState({});

  const CakeApi = "http://localhost:3000/cake/getcakebyid";
  const deleteCakeUrl = "http://localhost:3000/cake/deletecakebyid"
  async function findCake() {
    let response = await axios.get(`${CakeApi}/${id}`);
    setCake(response.data);
  }

  async function deleteCake(){
    await axios.delete(`${deleteCakeUrl}/${id}`).then((res)=>{
      console.log(res.data.message);
      alert(res.data.message);
      navigate('/baker/viewcakes');
    })
  }

  useEffect(() => {
    findCake();
  }, [id]);

  function goBack(){
    navigate('/baker/viewcakes')
  }
  return (
    <>
      <div
        className="container-fluid vh-100 "
        style={{ backgroundColor: "#ef476f" }}
        id="viewfullcakecontainer"
      >
        <div
          className="container card border-light d-block"
         id="infoCard"
          >
           
          <div class="card-header mt-2 d-flex justify-content-between" style={{ backgroundColor: "#ffa5ab" }}>
            {cake.flavour}
             <button className="btn" onClick={()=>goBack()}><img src={cross} alt="cancelBtn" /></button>
          </div>
          
          <div class="card-body d-flex justify-content-between">
            <img src={cake.image} alt="image" className="rounded" id="cakeImg" />
            
            <div id="cakeInfoDiv" className="p-2">
              <h5 class="card-title">{cake.cake_name}</h5>
              <p class="card-text">{cake.description}</p>
              <p className="fw-bold">₹{cake.price}</p>
              <p>Flavour : {cake.flavour}</p>
            </div>
          </div>
         
           <div className="mb-5">
             <button className="btn text-white d-block mx-auto w-25" onClick={()=>navigate(`/baker/editcake/${id}`)} style={{backgroundColor:"#ef476f",marginBottom:"5px"}}>Edit</button>
          <button className="btn text-white d-block mx-auto w-25" onClick={()=>deleteCake()} style={{backgroundColor:"#ef476f"}}>Delete</button>
           </div>
        </div>
      </div>
    </>
  );
}

export default ViewFullCake;
