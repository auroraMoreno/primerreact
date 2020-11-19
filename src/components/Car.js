import React, {useState} from 'react';

function Car(props){
    //cuando recibamos props tenemos la marca y el modelo, podemos tener + 
    //creamos un obj coche y iniciamos sus propiedades con lo que reciibmos en props del partent
    var coche ={
        marca: props.marca,
        modelo: props.modelo,
        velMax: props.velMax
    }


    // estado para saber si el coche está arrancado o no (bool)
    //queremos que pueda cambiar sobre una variable state
    const [estado, setEstado] = useState(false); //el coche parado por defecto
    const [velocidad, setVelocidad] = useState(0);

    const comprobarEstado =()=>{
        if(estado == true){
            return <span style={{color:"green"}}>Arrancado</span>
        }else{
            return <span style={{color:"red"}}>Parado</span>
        }
    }

    //queremos que el coche tenga velocidad, al inico 0 e incrememntaremos
    //para pintarla tendrá que ir al state

    //metodo para acelerar coche
    const acelerarCoche = ()=>{
        if(coche.marca == "Porsche"){
            if(estado == true){
                setVelocidad(velocidad + 20);
            }else{
                alert("El coche no puede acelerar parado");
            }
        }else if(coche.marca == "Ponitac"){
            if(estado == true){
                setVelocidad(velocidad + 50);
            }else{
                alert("El coche no puede acelerar parado");
            }
        }
        if(velocidad >= coche.velMax){
            alert(coche.marca + " va por enicma de la velocidad máxima");
            setVelocidad(0);
        }
    }

    //Quiero escribir: arrancado o parado dependiendo del estado y poner colores
    return(
        <div>
            <h1 style={{color:"fuchsia"}}>
                {coche.marca},{coche.modelo}
            </h1>
            <h2>El coche está...{comprobarEstado()}</h2>
            <h3 style={{color:"blue"}}>La velocidad es {velocidad}</h3>
            <button onClick ={()=> {
                setEstado(!estado);
                if(estado == true){
                    setVelocidad(0);
                }
            }}>Arrancar/Parar</button>
            <button onClick={()=> acelerarCoche()}>Acelerar</button>
        </div>
    );

}

export default Car; 