import { Component } from 'react';
import Boton from "./Boton";

export default class Registros extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Contenedor">
                Componente Registros
                <Boton 
                ruta="/cursos">
                    Ir a cursos
                </Boton>
            </div>
        )
    }
}
