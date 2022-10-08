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
import ProductPage from "../ProductPage/ProductPage";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <NavBar />
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/marketplace/:product" element={<ProductPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
