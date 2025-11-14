import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BakerNavbar from './BakerNavbar';


function Editcakes() {
    const navigate = useNavigate();
    
    const [cake, setCake] = useState({
        cake_name : "",
        flavour : "",
        price : "",
        category : "",
        desciption : "",
        image : ""
    });

    const [token, setToken] = useState("");

    const getcakebyidUrl ="http://localhost:3000/cake/getcakebyid"

    const updateUrl = "http://localhost:3000/cake/updatecake"

    const {id} = useParams();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await axios.put(`${updateUrl}/${id}`,cake).then((res)=>{
               alert(res.data.message);

               navigate('/baker/viewcakes')
            })
        }catch(error){
            console.log(error);
            alert(error);
        }
    }

    function handleChange(e){
        setCake({...cake,[e.target.name]:e.target.value});
    }


    async function getCake(){
        await axios.get(`${getcakebyidUrl}/${id}`).then((res)=>{
           setCake(res.data)
            
        });
       
        
    }
    useEffect(()=>{
        getCake();
        setToken(localStorage.getItem("token"));
        console.log((token));
        
    },[])
  return (
    <>

     <div className="add-cake-container">
      <div className="w-50">
        <h2 className="text-center mb-4" style={{color: "#d81159"}}> Edit Cake</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label className="form-label">Cake Name</label>
            <input
              type="text"
              className="form-control"
              name="cake_name"
              value={cake.cake_name}
              onChange={handleChange}
              placeholder="Enter cake name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Flavour</label>
            <input
              type="text"
              className="form-control"
              name="flavour"
              value={cake.flavour}
              onChange={handleChange}
              placeholder="e.g. Chocolate, Vanilla"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={Number(cake.price)}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="category"
              value={cake.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Cupcake">Cupcake</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={cake.description}
              onChange={handleChange}
              placeholder="Write something about the cake..."
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={cake.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              required
            />
          </div>

         <div className=''>
             <button type="submit" className="btn w-25 text-light text-canter" style={{backgroundColor:"#d81159"}} >
            Edit Cake
          </button>
         </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Editcakes