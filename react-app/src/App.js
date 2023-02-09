// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';

// toastr
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min";

// components
import Header from './components/Header/Header'
import SpinnerLoading from "./components/LoadingSpinner/SpinnerLoading";


// pages
const Home = React.lazy(() => import("./pages/Home/Home"))
const Triangulo = React.lazy(() => import("./pages/Trinangulo/Triangulo"))
const Circulo = React.lazy(() => import("./pages/Circulo/Circulo"))
const Cuadrado = React.lazy(() => import("./pages/Cuadrado/Cuadrado"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <ToastContainer />
            <Routes>
              <Route path="/" element={<Suspense fallback={<SpinnerLoading />}><Home /></Suspense>} />
              <Route path="home" element={<Suspense fallback={<SpinnerLoading />}><Home /></Suspense>} />
              <Route path="triangulo" element={<Suspense fallback={<SpinnerLoading />}><Triangulo /></Suspense>} />
              <Route path="circulo" element={<Suspense fallback={<SpinnerLoading />}><Circulo /></Suspense>} />
              <Route path="cuadrado" element={<Suspense fallback={<SpinnerLoading />}><Cuadrado /></Suspense>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
