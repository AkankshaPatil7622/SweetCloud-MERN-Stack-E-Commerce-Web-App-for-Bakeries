import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/BakerHome";
import { Route, Routes } from "react-router-dom";
import ViewCakes from "./pages/ViewCakes";
import Baker from "./pages/Baker";
import Addcake from "./components/Addcake";
import ViewFullCake from "./pages/ViewFullCake";
import BakerLogin from "./components/BakerLogin";
import Bakersignup from "./components/Bakersignup";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<User />}></Route>
      
        <Route  path="/baker/*" element={<Baker />}></Route>
      </Routes>
    </>
  );
}
export default App;
