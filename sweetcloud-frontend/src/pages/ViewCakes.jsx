import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BakerNavbar from "../components/BakerNavbar";

function ViewCakes() {
  const [cakes, setCakes] = useState([]);
  const navigate = useNavigate()
  const cakeurl = "http://localhost:3000/cake/showcakes";

  const cakegetbyidurl = "http://localhost:3000/cake/getcakebyid";


  useEffect(() => {
    fetchCakes();
  }, []);

  async function fetchCakes() {
    try {
      const res = await axios.get(cakeurl);
      setCakes(res.data);
    } catch (error) {
      console.error("Error fetching cakes:", error);
    }
  }


   async function viewProduct(c){

    await axios.get(`${cakegetbyidurl}/${c._id}`).then((res=>{
      console.log(res.data);
    }))

    navigate(`/${c._id}`)

    }
  return (
    <>
  

      <div className="container mt-4">
        {cakes.length === 0 ? (
          <h2 className="text-center">No cakes here</h2>
        ) : (
          <div className="row">
            {cakes.map((c, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                key={index}
              >
                <div className="card h-100 p-2">
                  <img
                    src={c.image}
                    className="card-img-top"
                    alt={c.cake_name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{c.cake_name}</h5>
                    <p className="card-text text-muted">
                     {c.description}
                    </p>
                    
                  </div>
                  <p className="fw-bold ms-3">₹{c.price}</p>
                  <button className="btn text-white" style={{backgroundColor:"#d81159"}} onClick={()=>viewProduct(c)}>View</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default ViewCakes;
