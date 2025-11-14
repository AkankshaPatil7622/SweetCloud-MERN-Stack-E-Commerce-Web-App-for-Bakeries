import React from "react";

import BakerHome from "../components/BakerHome";
import { Routes, Route } from "react-router-dom";
import Addcake from "../components/Addcake";
import Bakersignup from "../components/Bakersignup";
import BakerLogin from "../components/BakerLogin";
import ViewCakes from "./ViewCakes";
import Editcakes from "../components/Editcakes";
import BakerDashboard from "../components/BakerDashboard";
import Footer from "../components/Footer";
import BakerNavbar from "../components/BakerNavbar";
import ProtectedRoute from "../components/ProtectedRoute";
import ViewFullCake from "./ViewFullCake";
function Baker() {
  return (
    <>
       <BakerNavbar />
      <Routes>
        <Route index element={<BakerHome />}></Route>
        <Route path="dashboard" element={
          <ProtectedRoute>
            <BakerDashboard />
          </ProtectedRoute>
        }></Route>

        <Route path="addcake" element={
          <ProtectedRoute>
            <Addcake />
          </ProtectedRoute>
        }></Route>

        <Route path="viewcakes" element={
          <ProtectedRoute>
            <ViewCakes />
          </ProtectedRoute>
        }></Route>
        <Route path="signup" element={<Bakersignup />}></Route>
        <Route path="bakerlogin" element={<BakerLogin />}></Route>
        <Route path="/:id" element={<ViewFullCake />}></Route>
        <Route path="editcake/:id" element={
          <ProtectedRoute>
            <Editcakes />
          </ProtectedRoute>
        }></Route>
      </Routes>

      
    </>
  );
}

export default Baker;
