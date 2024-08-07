import { Component } from 'react';
import Boton from "./Boton";

export default class Alumnos extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log({
            id: this.props.id,
            curso: this.props.curso,
            materia: this.props.materia,
        });
    }
    render() {
        return (
            <div className="Contenedor">
                Componente Alumnos
                <Boton
                ruta="/login">
                    Ir a login
                </Boton>
            </div>
        )
    }
}