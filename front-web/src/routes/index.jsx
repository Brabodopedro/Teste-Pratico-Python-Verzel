import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/Error"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Anuncio from "../pages/anuncio";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro"
import CadastroVeiculoForm from "../pages/Anunciar";
import Anuncios from "../pages/anuncios";

const RouterApp  = () => {

  return (
    <BrowserRouter>
        <Header/> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/anuncio" element={<Anuncio/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/anunciar" element={<CadastroVeiculoForm/>}/>
            <Route path="/anuncios" element={<Anuncios/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default RouterApp;
