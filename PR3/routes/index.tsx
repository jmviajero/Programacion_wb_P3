import { FreshContext, Handlers, PageProps} from "$fresh/server.ts"
import axios from "npm:axios"
import { Tra } from "../types.ts";
import List from "../islands/List.tsx";

//hacer un handler para pillar los valores de job y pasarselos a listado
export const handler: Handlers = {
  GET: async (_req:Request, ctx:FreshContext<unknown, Tra >) => { 
      try {
          
        const ListaTrabajo = await fetch("https://www.arbeitnow.com/api/job-board-api")


        const data = await ListaTrabajo.json();

          return ctx.render( {
            datos: data.data
          })
      }
      catch (e)
      {
          throw new Error("Ha habido un error")
      }
  } 
}

export default function Home(props: PageProps<Tra>) {
  
  return (
    <div> 
      <List datos={props.data.datos}/>
    </div>
  );
}
