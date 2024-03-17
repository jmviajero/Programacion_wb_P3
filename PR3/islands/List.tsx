import { FunctionComponent } from "preact";
import {Tra, l, trabajo} from "../types.ts"
import Listado from "../components/Listado..tsx";
import { useState } from "preact/hooks";
import Descripciontrabajo from "../components/Descripciontrabajo.tsx";

type exist ={
  existe: boolean,
  trabajo : trabajo
}

export const List: FunctionComponent<Tra> = (props) =>{

  const lista = props

  if (!lista.datos) {
    return(<div>No hay datos</div>)
  }
  const [trabajo, setTrabajo] = useState<exist>({
    existe: true,
    trabajo: lista.datos[0]
  });


  return(
    <div>
      <div class={"Dividir"}>
        <div>
          <div class={"Cabezera"}>
            <h3>Principales empleos que te recomendamos</h3>
            <label>{lista.datos.length} Resultados</label>
          </div>
          <div class={"listado"}>
            {lista.datos.map(c=> {
              return(<Listado key= {trabajo.trabajo.title }    datos={c} onClick={(id) => {
                if (id === c.slug) setTrabajo ({
                  existe: true,
                  trabajo: c 
                })}}/>)
            }) }
          </div>
        </div>
        <div>
          {trabajo.existe && <Descripciontrabajo datos={trabajo.trabajo}/>}
        </div>
      </div>
      <div>

      </div>
      
    </div>
  )

}


export default List;