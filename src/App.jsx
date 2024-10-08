import { Component } from 'react';
import {Redirect, Route, Switch} from "wouter";
import Login from "./componentes/Login";
import Alumnos from "./componentes/Alumnos";
import Registros from "./componentes/Registros";
import Cursos from "./componentes/Cursos";
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
          <Redirect to = "/login"/>
        </Route>
        <Route path="/login">
          <Login 
            />
        </Route>
        <Route path="/alumnos">
          <Alumnos 
            cambiarMenu= {(opcion) => this.setState({menu:opcion})}
            />
        </Route>
        <Route path="/registros">
          <Registros 
            cambiarMenu={(opcion) => this.setState({ menu: opcion })} 
            />
        </Route>
        <Route path="/cursos">
          <Cursos 
            cambiarMenu={(opcion) => this.setState({ menu: opcion })} 
          />
        </Route>
        </Switch>
        {/*footer */}
      </>     
    )
  }
}