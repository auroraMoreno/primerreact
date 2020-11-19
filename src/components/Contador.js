//Para poder usar funct de react es necesario importarlas, como un css o img 
//necesitamos la functionalidad del state:
import React, {useState} from 'react';

function Contador() {
//una var de estado estará compuesta por nombre para mostrar y set para establecer
//desestrucutar pero con corchetes
//lo inicializa a 0, se llama numero (ahi mete el 0) y luego el set para cambiar
const [ numero, setNumero ] = useState(0); 

return(
<div>
    <h1>Ejemplo State Contador</h1>
    <h2 style={{color:"red"}}>El valor es de: {numero}</h2>
    <button onClick={()=>{
        //func anonima 
        setNumero(numero + 1);
    }}>Incrementar</button>
    <button onClick={()=>{
        setNumero(numero - 1);
    }}>Restar</button>
</div>

);

}

export default Contador; 