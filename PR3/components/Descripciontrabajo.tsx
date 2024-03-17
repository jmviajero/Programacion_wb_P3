import { FunctionComponent } from "preact";
import {a, trabajo} from "../types.ts"
import { PageProps } from "$fresh/server.ts";



export const Descripciontrabajo: FunctionComponent<a> = (props) =>{
  
  const trabajo = props.datos
    
    if (!trabajo) {
      return <div>No hay datos de trabajo disponibles</div>;
  }


  return(
    <div>
        
        <h1>{trabajo.title}</h1>
        <h3>{trabajo.company_name}</h3>
        <h3>solicitudes: 16</h3>
        <h3>Hibrido , Jornada Completa,  {trabajo.remote? "Remoto" : "Presencial"}</h3>
        <h3>Tu perfil encaja perfectamente con nuestra empresa</h3>
        <h5>Creada publicacion: { trabajo.created_at}</h5>
      <div class={"botones"}>
      <form action={trabajo.url} type={"GET"}><button class={"solicitar"} >Solicitar</button></form>
      
        <button class={"guardar"}>Guardar </button>
      </div>

      <hr></hr>
      <h2>Acerca del empleo</h2>
      <p dangerouslySetInnerHTML={{__html: trabajo.description}}></p>

    </div>
  )

}

export default Descripciontrabajo