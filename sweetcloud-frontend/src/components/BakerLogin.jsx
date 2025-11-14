import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
function BakerLogin() {
    const navigate = useNavigate();

    const [logText, setLogText] = useState("login");
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginApi = "http://localhost:3000/baker/login";

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 async function handleSubmit(e) {
    e.preventDefault();

   try{
     await axios.post(loginApi,formData).then((res)=>{
      alert(res.data.message);
      localStorage.setItem("token",res.data.token)
      navigate('/baker')
    }).catch((err)=>{
      alert(err);
    })
   }catch(error){
    console.log(error.message);
    
   }
  }

  return (
     <div className="d-flex justify-content-center align-items-center vh-100 " style={{backgroundColor:"#ffc1d6"}}>
      <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 fw-bold" style={{color:"#e91e63"}}>🍰 Baker Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="baker@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold text-white"
            style={{ borderRadius: "10px",backgroundColor:"#e91e63" }}
          >
            Login
          </button>
        </form>

        <p className="text-center text-muted mt-3" style={{ fontSize: "0.9rem" }}>
          New user? <Link to="/baker/signup" className="text-decoration-none" style={{color:"#e91e63"}}>Create account</Link>
        </p>
      </div>
    </div>

    
  )
}

export default BakerLogin