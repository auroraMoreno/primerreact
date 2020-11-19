function Saludo(props) {
    //var name=props.nombre;
    //var age= props.edad;
    var estilofeo = {color:"white", backgroundColor:"green"};
    const { nombre, edad, metodo } = props; 
    var ejemplo ="Hoy es martes";

    const botonPulsado = () => {
        console.log("Has pulsado el boton");
        ejemplo ="Y mañana miércoles";
        console.log(ejemplo);
      }
    
      const sumarNumeros = (num1, num2) => {
          var suma = num1 + num2;
          console.log("El resultado es: " + suma);

      }

      const mostrarMensaje = ()=>{
        return <h1>Soy un mensaje html</h1>
      }
    //los nombres de las propiedades las estructura
    //no por posicion
    //por el nombre de los elementos
    return (
    <div>
        <h1 style={estilofeo}>
            {ejemplo}
        </h1>
        {/*Ejecutando direct en la funcion; 
        Sin lambda ejecuta la func al momento */}
        {sumarNumeros(7,7)}
        {botonPulsado()}
        {mostrarMensaje()} 
        <h1>Saludando a {nombre}, con edad {edad}</h1>
        <button onClick={() => metodo( nombre + " " + edad )}>Metodo padre</button>
        <button onClick={() => botonPulsado()}>Pulsar botón</button>
        <button onClick={() => sumarNumeros(3,5)}>Sumar</button>
    </div>);
}

export default Saludo;