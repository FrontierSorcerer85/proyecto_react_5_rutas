import { Component } from 'react';
import Boton from "./Boton";

export default class Cursos extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Contenedor">
                Componente Cursos
                <Boton 
                ruta="/registros">
                    Ir a registros
                </Boton>
            </div>
        )
    }
}
