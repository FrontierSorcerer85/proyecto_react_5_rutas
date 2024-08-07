import { Component } from 'react';
import {Redirect, Route} from "wouter";
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
        <Route path="/">
          <Redirect to = "/login"/>
        </Route>
        <Route path="/login">
          <Login 
            cambiarMenu= {(opcion) => this.setState({menu:opcion})}
          />
          </Route>
        <Route path="/alumnos">
          <Alumnos 
            cambiarMenu= {(opcion) => this.setState({menu:opcion})}
          />
          </Route>
        {/*footer */}
      </>
    )
  }
}

//si tenias el token valido