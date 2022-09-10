//Imported  some things needed for firebase here - dotAlexX
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
//Stopped here - dot AlexX
import './App.css'
import { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import MintedNFT from './components/MintedNFT/MintedNFT'
import PaymentDetails from './components/PaymentDetails/PaymentDetails'
import Organization from './components/Organization/Organization'


function App() {

  //This is the login stuff -dotAlexX
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  //Stops here the code I added -dotAlexX

  return (
      //Added the login thing here but it is ideal to create a login page, will work on that when I get to the hackathon - dotAlexX
    <div className="App">

      <div>
        <h3> Register User </h3>
        <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
        />
        <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
        />
        <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>



      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/minted-nft" element={<MintedNFT />} />
          </Routes>
        </Fragment>
      </Router>
    </div>

      //Code for the placeholder login ends at lines 117 ideally front end guy should make something nicer and a login page should be seperate - dotAlexX

  );
}

export default App;
