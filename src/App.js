import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import "./App.css";

//Context
import UserContext from "./context/UserContext";

//Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//react-router
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

//Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//Components
import firebaseConfig from "./config/firebaseConfig";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./Pages/Home.js";
import PageNotFound from "./Pages/PageNotFound.js";
import Signin from "./Pages/Signin.js";
import Signup from "./Pages/Signup.js";

//Initialize firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Router>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </UserContext.Provider>
      </Router>
      <Footer />
    </>
  );
};

export default App;
