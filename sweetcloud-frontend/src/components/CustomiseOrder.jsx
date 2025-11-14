import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCakeCandles } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import '../style/User.css';

function CustomiseOrder() {
  const { id } = useParams();

  const [cake, setCake] = useState("");

  const getcakebyidurl = "http://localhost:3000/cake/getcakebyid";

  const paymentUrl = "http://localhost:3000/order/buy-cake";


  async function createOrder() {
    await axios
      .get(`${getcakebyidurl}/${id}`)
      .then((res) => {
        setCake(res.data);
      })
      .catch((error) => {
        console.log(error.message);
        console.log("error from catch block in customiseOrder.jsx");
      });
  }

  async function makePayment(){
    await axios.post(`${a}`)
  }


  useEffect(() => {
    createOrder();
  }, [id]);

  return (
    <>
      <div className="container orderContainer">
        <div className="card">
          <img src={cake.image} alt="cake image" id="cakeImg"/>
          <p className="text-center fs-4">{cake.cake_name}</p>
          <p className="text-center">{cake.flavour} flavour</p>
          <p className="text-center">{cake.description}</p>
          <p className="fw-bold text-center">₹{cake.price}</p>

          <div className="d-flex justify-content-center align-items-center">
            <button
              className="buy-btn w-25 mx-auto"
            onClick={() => makeOrder(cake._id)}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomiseOrder;
