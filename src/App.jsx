import { Component } from 'react';
import {Redirect, Route, Switch} from "wouter";
import Login from "./componentes/Login";
import Alumnos from "./componentes/Alumnos";
import './App.css'

export default class App extends Component {
  constructor(props){
    super (props);
    this.state = {
      menu:"alumnos"
    }
  }

  render(){
    return(
      <>
        {/*header */}
        <Switch>
        <Route path="/">
          <Redirect to = "/login"/></Route>
        <Route path="/login">
          <Login 
            />
          </Route>
        <Route path="/alumnos/:curso/:id/:materia">
          {(params) => <Alumnos 
            curso={params.curso} 
            id={params.id}
            mat={params.materia}
          />}
          </Route>
          <Route>404</Route>
          </Switch>
        {/*footer */}
      </>
    )
  }
}

//dos componentes, uno para registros y otro para listado de cursos, con sus respectivas rutas.