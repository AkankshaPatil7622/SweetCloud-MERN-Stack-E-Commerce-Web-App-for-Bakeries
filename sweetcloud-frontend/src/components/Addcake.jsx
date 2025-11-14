import React, { useState } from 'react'
import '../style/Addcakestyle.css'
import BakerNavbar from './BakerNavbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Addcake() {

    const navigate = useNavigate();

    const [cake, setCake] = useState({
        cake_name:"",
        flavour : "",
        price : "",
        category:"",
        description:"",
        image:"",
        weight:""
    });

    const addCakeUrl = "http://localhost:3000/cake/addcake"
    function handleChange(e){
        setCake({...cake,[e.target.name]:e.target.value})
    }

  async function handleSubmit(e){
    e.preventDefault();

    await axios.post(addCakeUrl,cake).then((res)=>{
      // localStorage.setItem("token",res.data.token);
      navigate('/baker/viewcakes')
    }).catch((error)=>{
      console.log(error);
      alert(error);
    })
   
  }
  return (
    <>

     <div className="add-cake-container">
      <div className="w-50">
        <h2 className="text-center mb-4" style={{color: "#d81159"}}> Add New Cake</h2>
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
              type="number"
              className="form-control"
              name="price"
              value={cake.price}
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


           <div className="mb-3">
            <label className="form-label">Weight</label>
            <input
              type="text"
              className="form-control"
              name="weight"
              value={cake.weight}
              onChange={handleChange}
              placeholder="e.g. 500gm, 1kg"
              required
            />
          </div>

         <div className=''>
             <button type="submit" className="btn w-25 text-light text-canter" style={{backgroundColor:"#d81159"}} >
            Add Cake
          </button>
         </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Addcake