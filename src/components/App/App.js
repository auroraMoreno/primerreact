import logo from './../../logo.svg';
import './App.css';
//para usar el comp debemos crearnos el comp en el lugar adecuado
//import Saludo from './../Saludo';
import Sumarnumeros from './../Sumarnumeros';


function App() {
  //para enviar param a la function, se quitan los parenteis
  const metodoPadre = descripcion => {
    console.log("Metodo del padre " + descripcion);
  }

  const sumaPadre = (num1, num2)=>{
    console.log(num1 + num2);
  }
  
var styleHijo={color:"pink", backgroundColor:"yellow"};;
var stylePadre={color:"white", backgroundColor:"green"};

  return (
    <div className="App" style={stylePadre}>
      {/*<Saludo nombre="Adrian" edad="21" metodo={metodoPadre}/>
      <Saludo nombre="Lucia" edad="15" metodo={metodoPadre}/>
  <Saludo nombre="Pedro" edad="40" metodo={metodoPadre}/>*/}
  <h2>Botones para sumar:</h2>
    <Sumarnumeros num1="3" num2="33" metodo={sumaPadre} estiloHijo={styleHijo}/>
 
    </div>
  );
}

export default App;
