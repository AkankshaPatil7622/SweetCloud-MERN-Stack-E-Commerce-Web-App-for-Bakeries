import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CakeCategorycard from "./CakeCategorycard";

function Cakesbyflavour() {
  const { flavour } = useParams();
  const navigate = useNavigate();
  const [cakes, setCakes] = useState([]);
  const apiurl = "http://localhost:3000/cake/getcakebyflavour";

  const getcakebyidurl = "http://localhost:3000/cake/getcakebyid";

  async function getCakes() {
    await axios.get(`${apiurl}/${flavour}`).then((res) => {
      setCakes(res.data);
    });
  }

  async function viewCake(id) {
    await axios.get(`${getcakebyidurl}/${id}`).then((res)=>{
      navigate(`/cake/${flavour}/${id}`)
    })
  
  }

  useEffect(() => {
    getCakes();
  }, [flavour]); // need to change the dependency array value
  return (
    <>
      <div className="showCakeByFlavour">
        {cakes.map((cake) => {
          return (
            <>
              <div className="cake-card shadow-sm">
                <img src={cake.image} alt="cakeImage" className="cake-image" />
                <div className="cake-info">
                  <h5 className="cake-name">{cake.cake_name}</h5>
                  <p className="cake-price">₹{cake.price}</p>
                  <button
                    className="buy-btn"
                    onClick={() => viewCake(cake._id)}
                  >
                    View
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Cakesbyflavour;
