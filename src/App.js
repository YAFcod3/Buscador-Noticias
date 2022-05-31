import React, { Fragment,useState,useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";




function App() {




 //definir la categoria y noticias......aqui se va a guardar rl valor qndo se de submit

const[categoria, guardarCategoria]=useState("")

//para tener las noticias desp de hacer el fetch
const [noticias,guardarNoticias]=useState([]);


  useEffect(()=>{

    const consultarAPI = async ()=>{
      const url=`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=46c3220c9c7948b8b237636a3e32aee0`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles)
    }
    
    consultarAPI();
  },[categoria]);







  return (
    <Fragment>

      <Header titulo="Buscador de Noticias" />

      <div className="container white">

        <Formulario 
        guardarCategoria={guardarCategoria}/>

        <ListadoNoticias noticias={noticias}/>
      </div>

    </Fragment>
  );
}

export default App;
