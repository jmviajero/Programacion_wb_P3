import { FunctionComponent } from "preact";
import {l, trabajo} from "../types.ts"
import { PageProps } from "$fresh/server.ts";



export const Listado: FunctionComponent<l> = (props) =>{
    
    const trabajo = props.datos

  return(
    <div class={"comp"}>
        <form onClick={() => {
            props.onClick(trabajo.slug)
        }}>
        <h4>{trabajo.title}</h4>
        <strong>{trabajo.company_name}</strong><br></br>
        <br></br>
        <div class={"botones"}>
          <div >
            <img class={"imagen"} src={"vacante.jpg"}/>
          </div>
          <div>
            <label>Madrid, España</label><br></br>
            <label>6 contactos trabajan aqui</label><br></br>
            <label>Promocionado, 6 solicitudes</label>
          </div>
        
        </div>
        
        </form>
    </div>
  )

}


export default Listado;