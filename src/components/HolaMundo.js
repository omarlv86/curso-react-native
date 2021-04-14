import React  from "react";

export default function HolaMundo(){

    const miFunction = () =>{
        console.log("Mi funcion");
    }

    return(
        <div>
            <h1>Hola mundo</h1>
            <h2>Omar Lugo</h2>
        </div>
    );
}

//export default HolaMundo;

export function AdiosMundo(){
    return(
        <div>
            <h3>Adios</h3>
        </div>
    )
}