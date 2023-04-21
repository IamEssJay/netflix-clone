import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextprovider } from "./context/AuthContext";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
    <AuthContextprovider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={
        <ProtectedRoute>
          <Account/>
          </ProtectedRoute> }/>
      </Routes>
    </AuthContextprovider>
    </>
  );
}

export default App;
