/*import { Contador } from "./components/Contador"
import { ContadorHook } from "./components/ContadorHook"
import { Login } from "./components/Login"*/
import { Formularios } from "./components/Formularios"
import { Usuarios } from "./components/Usuarios"
/*import { Funciones } from "./typescript/Funciones"
import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
import { TiposBasicos } from "./typescript/TiposBasicos"*/

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a tipescript react</h1>
      <hr />
     {/*  <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones />
      <hr />
      <Contador />
      <hr />
      <ContadorHook />
      <hr/> 
      <Login/>*/}
      <Usuarios/>
      <Formularios/>
    </div>
  )
}

export default App