import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Bakersignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    baker_name: "",
    baker_city: "",
    email: "",
    mobile: "",
    password: "",
    shoptype: "",
    shopname: "",
    address: "",
  });

  const registerUrl = "http://localhost:3000/baker/register";

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(registerUrl, formData);
      alert(res.data.message);
      navigate("/baker/bakerlogin");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#ffc1d6",
        minHeight: "100vh", // full screen height
        overflow: "hidden", // prevent scroll
      }}
    >
      <div
        className="shadow-lg p-4 bg-light container"
        style={{
          borderRadius: "15px",
          maxWidth: "700px",
        }}
      >
        <h3 className="text-center mb-4 fw-bold" style={{ color: "#d81159" }}>
          🧁 Create Baker Account
        </h3>

        <form onSubmit={handleSubmit}>
          {/* First Row - Baker Name & City */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Baker Name</label>
              <input
                type="text"
                className="form-control"
                name="baker_name"
                placeholder="Enter your full name"
                value={formData.baker_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">City</label>
              <input
                type="text"
                className="form-control"
                name="baker_city"
                placeholder="Enter your city"
                value={formData.baker_city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Second Row - Email & Mobile */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="baker@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Mobile</label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Third Row - Password & Shop Type */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Shop Type</label>
              <select
                className="form-select"
                name="shoptype"
                value={formData.shoptype}
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option value="Bakery">Bakery</option>
                <option value="Home Bakery">Home Bakery</option>
                <option value="Cake Studio">Cake Studio</option>
                <option value="Pastry Shop">Pastry Shop</option>
              </select>
            </div>
          </div>

          {/* Fourth Row - Shop Name (Full Width) */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Shop Name</label>
            <input
              type="text"
              className="form-control"
              name="shopname"
              placeholder="Enter your shop name"
              value={formData.shopname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Fifth Row - Address (Full Width) */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <textarea
              className="form-control"
              name="address"
              placeholder="Enter your full address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              borderRadius: "10px",
              backgroundColor: "#d81159",
              color: "white",
            }}
          >
            Create Account
          </button>
        </form>

        <p
          className="text-center text-muted mt-3"
          style={{ fontSize: "0.9rem" }}
        >
          Already have an account?{" "}
          <Link
            to="/baker/bakerlogin"
            className="text-decoration-none"
            style={{ color: "#d81159" }}
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Bakersignup;
