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
  return (
    <div className="App">
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
  );
}

export default App;
