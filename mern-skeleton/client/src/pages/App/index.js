import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import { ProtectedRoute } from "../../utils/route";
import NavBar from "../../components/NavBar/NavBar";
import ProtectedPage from "../ProtectedPage";
import Footer from "../../components/Footer/Footer";
import Marketplace from "../Marketplace/Marketplace";
import Dashboard from "../Dashboard/Dashboard";
import ProductPage from "../ProductPage/ProductPage";
import ArtistsPage from "../ArtistsPage/ArtistsPage";
import Checkout from "../Checkout/Checkout";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LsWKuK3m4JInnwoPDle8M9tWKsWzi8whmAyod8xOLPrtHRgPC9JimDhbOqdnmmgxQicXRqu9XVosHDTZfT1A0Nk00IURxFiXG');

function App() {
  // const [clientSecret, setClientSecret] = React.useState('');
  // React.useEffect(() => {
  //   async function getStripeToken(){
  //    con
  //   }
  // })
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3Lt7aHK3m4JInnwo0ZkR9Zf4_secret_dsE134xOYSWLwpfj2nLC4hIo8',
  };
  return (
    <div className="app-wrapper">
      <header className="header">
        <NavBar />
      </header>
      <div className="page-wrapper">
        <Elements stripe={stripePromise} options={options}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/artists" element={<ArtistsPage />} />
            <Route exact path="/marketplace" element={<Marketplace />} />
            <Route exact path="/marketplace/:id" element={<ProductPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      </div>
      <Footer />
    </div>
  );
}

export default App;
