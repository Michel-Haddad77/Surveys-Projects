import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/Login-Form";
import SignupForm from "./components/Signup-Form";
import AllSurveys from "./components/AllSurveys";

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* Login route */}
      <Route 
        path="/"
        element = {
          <LoginForm />
        }
      ></Route>

      <Route
        path="/signup"
        element = {
          <SignupForm />
        }
      ></Route>

      <Route
        path="/all_surveys"
        element={
          <AllSurveys />
        }
      ></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
