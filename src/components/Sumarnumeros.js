function Sumarnumeros(props){

var num1Padre= props.num1;
var num2Padre = props.num2;

var sumar = props.metodo;
var estiloHijo = props.estiloHijo;

const sumaSinParam = () =>{
    var suma = parseInt(num1Padre) + parseInt (num2Padre);
    console.log("La suma es: " + suma);
}

const sumarNumeros = (num1,num2) =>{
console.log(num1 + num2);
}

//var styleHijo = {color:"pink", backgroundColor:"red"};

return(
    <div>
        <h1 style={estiloHijo}>Sumar numeros Hijos desde casa </h1>
        <button onClick={() => sumarNumeros(4,5)}>Suma</button>
        <button onClick={() => sumar(num1Padre,num2Padre)}>Suma desde el padre</button>
        <button onClick={() => sumaSinParam()}>Suma sin parametros</button>
    </div>

)

}

export default Sumarnumeros;